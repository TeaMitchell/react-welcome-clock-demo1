import React from "react";
import { Route, Switch } from 'react-router-dom';

import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from './components/contacts/Contact';
import Navigation from './components/navigation/Navigation';
import Error404 from "./components/error/Error"
import Jeopardy from "./components/jeopardy/Jeopardy";

function App() {
  return (
    <div className="App">
      <Navigation />
        <Switch>
          <Route exact
            path="/"
            render={(props) => <Welcome {...props} name="Te'a" />} />
          <Route path="/welcome/:name" render={(props) => <Welcome name={props.match.params.name} />} />
          <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />
          <Route path="/jeopardy" component={Jeopardy} />
          <Route component={ Error404 } />
        </Switch>
    </div>
  );
}

export default App;
