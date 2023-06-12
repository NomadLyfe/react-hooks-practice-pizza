import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState(null);
  const [pizzaForm, setPizzaForm] = useState({id: "", topping: "", size: "small", vegetarian: true})

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(r => r.json())
    .then(data => setPizzas(data));
  }, [])

  function handleEditPizza(pizzaToEdit) {
    setPizzaForm({id: pizzaToEdit.id, topping: pizzaToEdit.topping, size: pizzaToEdit.size, vegetarian: pizzaToEdit.vegetarian});
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (pizzaForm.id !== "") {
      fetch(`http://localhost:3001/pizzas/${pizzaForm.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pizzaForm)
      })
      .then(r => r.json())
      .then(data => {
        const updatedPizzas = pizzas.map(pizza => {
          if (pizza.id === data.id) {
            return data
          } else {
            return pizza;
          }
        })
        setPizzas([...updatedPizzas])
      });
    }
  }

  if (!pizzas) return <p>Loading...</p>

  return (
    <>
      <Header />
      <PizzaForm pizzaForm={pizzaForm} setPizzaForm={setPizzaForm} onFormSubmit={handleFormSubmit} />
      <PizzaList pizzas={pizzas} onEditPizza={handleEditPizza} />
    </>
  );
}

export default App;
