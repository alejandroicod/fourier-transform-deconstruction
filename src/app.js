import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/home";

class App extends React.Component {
  render() {
    return <Router>
      <Route path="/" exact component={HomePage} />
    </Router>
  }
}

export default App