import React from "react";
import { ReactDOM } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Results from "./components/SearchResult/Result";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/results">
            <Results />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
