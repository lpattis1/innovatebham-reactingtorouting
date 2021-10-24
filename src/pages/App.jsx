import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "../components/Navbar";
import Films from "./Films";
import Filmdetails from "./Filmdetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/films">
            <Films />
          </Route>
          <Route exact path="/films/:filmid">
            <Filmdetails />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
