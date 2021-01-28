import axios from "axios";
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import schema from "./validation/formSchema";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: white;
  margin: 1%;
  h2 {
    font-size: 30px;
  }
  h3 {
    background: grey;
  }
`;

const initialFormValues = {
  size: "",
  sauce: "",
  specialInstructions: "",
  pepperoni: false,
  sausage: false,
  onions: false,
  pineapple: false,
};

const initialFormErrors = {
  size: "",
  sauce: "",
  specialInstructions: "",
};

const initialDisabled = true;

export default function PizzaForm(props) {
  const { setPizzaOrder } = props;

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const { push } = useHistory();

  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/users", newOrder)
      .then((res) => {
        setPizzaOrder(res.data);
        setFormValues(initialFormValues);
        push("/ThankYou");
      })
      .catch((err) => {
        debugger;
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    inputChange(name, valueToUse);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    postNewOrder(formValues);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <StyledDiv>
      <form onSubmit={formSubmit}>
        <div>
          <h2>Build Your Own Pizza</h2>
        </div>
        <h3>Choose Your Size</h3>
        <label>
          Size:
          <select value={formValues.size} onChange={onChange} name="size">
            <option value="">---Select Size---</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <h3>Choose Your Sauce</h3>
        <div>
          <label>
            Original Red
            <input
              type="radio"
              name="sauce"
              value={"original red"}
              checked={formValues.sauce === "original red"}
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <label>
            BBQ Sauce
            <input
              type="radio"
              name="sauce"
              value={"bba sauce"}
              checked={formValues.sauce === "bba sauce"}
              onChange={onChange}
            />
          </label>
        </div>
        <h3>Add Toppings</h3>
        <div>
          <label>
            Pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              checked={formValues.pepperoni}
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <label>
            Sausage
            <input
              type="checkbox"
              name="sausage"
              checked={formValues.sausage}
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <label>
            Onions
            <input
              type="checkbox"
              name="onions"
              checked={formValues.onions}
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <label>
            Pineapple
            <input
              type="checkbox"
              name="pineapple"
              checked={formValues.pineapple}
              onChange={onChange}
            />
          </label>
        </div>
        <h3>Special Instructions</h3>
        <input
          value={formValues.specialInstructions}
          onChange={onChange}
          name={"specialInstructions"}
          type="text"
          placeholder={"Anything else you would like to add?"}
        />
        <div>
          <button disabled={disabled}>Submit Order</button>
        </div>
      </form>
    </StyledDiv>
  );
}
