import React from  "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Booklist from "./Booklist";
import Booklistnakata from "./Booklistnakata";
import Blog from "./Blog";
import Izaka from "./Izaka"
 
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/books">
            <Header />
            <Booklist />
          </Route>
          <Route path ="/nakata">
            <Header />
            <Booklistnakata />
          </Route>
          <Route exact path="/izaka">
            <Header />
             <Izaka />
             
            
          </Route>
          <Route  exact path="/blog">
            <Header />
            <Blog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
