import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <h1>LAMBDA EAT's</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/PizzaForm">Order</Link>
      </nav>
    </header>
  );
}
