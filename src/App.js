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
          <div id="navbar">
          <a id="home" class="active" href="main.html"><img src="data/TaskBarIcons/home_red.png"></img> HOME</a>
          <a id="about" href="about.html"><img src="data/TaskBarIcons/about_orange.png"></img> ABOUT</a>
          <a id="portfolio" href="portfolio.html"><img src="data/TaskBarIcons/portfolio_orange.png"></img> PORTFOLIO</a>
          <a id="bookseries" href="#bookseries"><img src="data/TaskBarIcons/book_orange.png"></img> BOOK SERIES</a>
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
          </div>
            */
      );

  }
}

export default App;