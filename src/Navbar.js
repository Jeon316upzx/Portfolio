import { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="myNavbar d-flex flex-row justify-content-between align-items-center">
        <div>
          <h4>TNI10xxx</h4>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-center">
          <a
            href="https://github.com/Jeon316upzx"
            target="_blank"
            rel="noreferrer"
            className="nav-item-icon"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a
            href="https://twitter.com/old_mustang_"
            target="_blank"
            rel="noreferrer"
            className="nav-item-icon"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>

          <a
            href="https://www.linkedin.com/in/ifeanyi-anuebunwa-4920b415a/"
            target="_blank"
            rel="noreferrer"
            className="nav-item-icon"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>

          <a
            href="mailto:jeon316@icloud.com?Subject=Hello Ifeanyi"
            target="_blank"
            rel="noreferrer"
            className="nav-item-icon"
          >
            <ion-icon name="mail-outline"></ion-icon>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
