//import "./App.css";
import "./css/theme.css";
import "./css/libs.css";
import AOS from "aos";

import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Navbar from "./components/Navbar";
import Login from "./components/Login"
//pages
import Home from "./pages/Home";
import Company from "./pages/Company";
import Blog from "./pages/Blog";
import TempCompanyGrid from "./components/TempCompanyGrid";
import HSL from "./pages/HSL";
import BlogPost from "./pages/BlogPost";
//state
import { auth } from "./firebase/config";
import { useStateValue } from "./state/StateProvider";
import Problem from "./pages/Problem";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is :", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
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
          <Route path="/company/:id" component={HSL}></Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/listing" component={Problem} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
