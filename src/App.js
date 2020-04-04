import React from "react";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
