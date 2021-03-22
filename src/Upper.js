import { Component } from "react";
import "./Upper.css";

import Profile from "./profile.svg";

class Upper extends Component {
  render() {
    return (
      <div className="upper">
        <div className="row">
          <div className="col-md-6 p-4">
            <p className="introduction">
              Hey 👋 , I'm <h1 className="name"> Ifeanyi </h1> a full stack
              developer.
            </p>
            <p className="extra">
              I have 3+ years experience building scalable solutions with
              Python(Django), JavaScript( Node Js , Express Js, Vue Js, React
              Js) , AWS , Digital Ocean and currently diving into Machine
              Learning.
            </p>

            <a
              href="https://drive.google.com/file/d/19Owf-3q6A6jB96ziJPxpHSS4y9H2AN1X/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn btn-download"
            >
              Download Resume
            </a>
          </div>
          <div className="col-md-6 p-4 right-section">
            <img src={Profile} alt="Profile" />
          </div>
        </div>
      </div>
    );
  }
}

export default Upper;
