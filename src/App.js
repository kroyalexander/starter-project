//import './App.css';
import './main.css'
import React from 'react';
import {Route, Switch, Link } from "react-router-dom";
import About from './About';
import Home from './Home';
import Contact from './Contact';

class App extends React.Component {
  render() {
      return (
          <div className="App">
            <div id="navbar">
              <a id="home" class="active"><img src="data/TaskBarIcons/home_red.png"></img> HOME</a>
              <a id="about"><img src="data/TaskBarIcons/about_orange.png"></img> ABOUT</a>
              <a id="portfolio"><img src="data/TaskBarIcons/portfolio_orange.png"></img> PORTFOLIO</a>
              <a id="bookseries"><img src="data/TaskBarIcons/book_orange.png"></img> BOOK SERIES</a>
            </div>
            <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/porfolio">
              <Contact />
            </Route>
            <Route path="/bookseries">
              <Contact />
            </Route>
          </Switch>
          </div>
        /*<div className="App">
          <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
            <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          </div>*/ 
      );

  }
}

export default App;