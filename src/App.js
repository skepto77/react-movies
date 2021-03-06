import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Details from './pages/Details';
import NotFound from './pages/NotFound';

export default function App() {

  return (
    <>
      <Router basename="/react-movies">
        <Header />
          <main className="container position-relative">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/:id" component={Details}></Route>
            <Route component={NotFound}></Route>
          </Switch>
          </main>
        <Footer />
      </Router>
    </>
  );
}

