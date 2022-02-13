
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Enter from "./routes/Enter";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Enter />
        <Route path="/AllMovie">
          <Home />
        </Route>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
