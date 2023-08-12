import React, { startTransition } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={"FirstPage"} />
          <Route path="/page-two" component={"SecondPage"} />
        </Switch>
      </div>
    </Router>
  );
}
export default App();