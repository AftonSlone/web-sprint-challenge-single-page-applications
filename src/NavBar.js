import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: red;
  display: flex;
  justify-content: space-between;
  color: white;

  nav {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    a {
      color: white;
      display: inline-block;
      width: 20%;
    }
  }
`;

export default function NavBar() {
  return (
    <StyledHeader>
      <h1>LAMBDA EAT's</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/PizzaForm">Order</Link>
      </nav>
    </StyledHeader>
  );
}
