import React from "react";
import { BrowserRouter as Router, Redirect, Route, Link, NavLink } from "react-router-dom";

import HomePage from "./pages/home";
import PianoPage from "./pages/piano";
import WaveformPage from "./pages/waveform";

class App extends React.Component {
  render() {
    return <Router>
      <nav className="menu">
        <h3>Menu</h3>
        <ul>
          <li><NavLink to="/home" activeClassName="selected">Fourier</NavLink></li>
          <li><NavLink to="/piano" activeClassName="selected">Piano</NavLink></li>
          <li><NavLink to="/waveform" activeClassName="selected">Waveform</NavLink></li>
        </ul>
      </nav>
      <Route exact path="/home" component={HomePage} />
      <Route path="/piano" component={PianoPage} />
      <Route path="/waveform" component={WaveformPage} />
      <Redirect from="/" to="/home" />
    </Router>
  }
}

export default App