//import "./App.css";
import "./css/theme.css";
import "./css/libs.css";
import AOS from "aos";

import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Navbar from "./components/Navbar";
//pages
import Home from "./pages/Home";
import Company from "./pages/Company";
import Blog from "./pages/Blog";
import TempCompanyGrid from "./components/TempCompanyGrid";
import HSL from "./pages/HSL";
import BlogPost from "./pages/BlogPost";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:id" component={BlogPost} />
          <Route exact path="/company" component={Company} />
          <Route path="/company/hsl" component={HSL}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
