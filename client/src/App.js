import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./components/pages/Home/Home.js";
import { LandingPage } from "./components/pages/LandingPage/LandingPage.js";
import { Navbar } from "./components/component/Navbar/Navbar.js";
import { SearchNav } from "./components/component/Navbar/SearchNav.js";
import { PokeDetail } from "./components/pages/PokeDetail/PokeDetail.js";
import { NewPoke } from "./components/pages/NewPoke/NewPoke.js";
function App() {
  return (
    <React.Fragment>
      <Route path="/home" component={Navbar} />
      <Route path="/search" component={SearchNav} />
      <Route path="/details/:id" component={Navbar} />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route path="/details/:id" component={PokeDetail} />
      <Route path="/newpoke" component={Navbar} />
      <Route path="/newpoke" component={NewPoke} />
    </React.Fragment>
  );
}

export default App;
