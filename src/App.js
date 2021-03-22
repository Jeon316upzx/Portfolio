import { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Upper from "./Upper";
import Projects from "./Projects";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Upper />
        <Projects />
      </div>
    );
  }
}

export default App;
