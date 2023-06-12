import React from "react";

function PizzaForm({ pizzaForm, setPizzaForm, onFormSubmit }) {
  function handleChange(e) {
    setPizzaForm({...pizzaForm, [e.target.name]: e.target.value});
  }

  function handleCheckChange(e) {
    setPizzaForm({...pizzaForm, [e.target.name]: !pizzaForm.vegetarian});
  }
  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={pizzaForm.topping}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={pizzaForm.size} onChange={handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              checked={pizzaForm.vegetarian}
              onChange={handleCheckChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              checked={!pizzaForm.vegetarian}
              onChange={handleCheckChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
