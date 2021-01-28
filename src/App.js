import React, { useState, useEffect } from "react";
import { Route, link, Switch } from "react-router-dom";
import PizzaForm from "./PizzaForm";
import ThankYou from "./ThankYou";
import NavBar from "./NavBar";
import Home from "./Home";
import { set } from "lodash";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: white;
`;

const App = () => {
  const [pizzaOrder, setPizzaOrder] = useState(null);

  return (
    <StyledDiv>
      <NavBar />
      <Switch>
        <Route path="/PizzaForm">
          <PizzaForm setPizzaOrder={setPizzaOrder} />
        </Route>
        <Route path="/ThankYou">
          <ThankYou order={pizzaOrder} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </StyledDiv>
  );
};
export default App;
