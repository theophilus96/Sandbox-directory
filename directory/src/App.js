//import "./App.css";
import "./css/theme.css"
import "./css/libs.css"

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Navbar from "./components/Navbar"
//pages
import Home from "./pages/Home";

function App() {
  return (
     <div className="App">
        <Router>
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
        </Router>
      </div>
  );
}

export default App;
