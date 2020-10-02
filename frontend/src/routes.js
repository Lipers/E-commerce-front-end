import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Catalogo from "./pages/Catalogo";
import Carrinho from "./pages/Carrinho";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/catalogo" component={Catalogo} />
        <Route exact path="/carrinho" component={Carrinho} />
      </Switch>
    </BrowserRouter>
  );
}
