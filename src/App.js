import React, { useState, useEffect } from "react";
import { Route, link, Switch } from "react-router-dom";
import PizzaForm from "./PizzaForm";
import ThankYou from "./ThankYou";
import NavBar from "./NavBar";
import Home from "./Home";
import { set } from "lodash";

const App = () => {
  const [pizzaOrder, setPizzaOrder] = useState(null);

  return (
    <div>
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
    </div>
  );
};
export default App;
