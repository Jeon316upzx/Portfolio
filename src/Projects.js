import { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div className="d-flex justify-content-start align-items-center">
          <h3> My Projects </h3>
        </div>

        <div className="row pt-5">
          <div className="col-md-4 col-lg-4 p-1">
            <div className="project d-flex flex-column justify-content-center align-items-start">
              <div className="icon__container d-flex justify-content-center align-items-center"></div>
              <div className="d-flex justify-content-center py-3">
                <h4> Vault24 </h4>
              </div>
              <div className="description">
                Vault24 is a savings and Short term loan platform that allows
                customers to save towards a target
              </div>
              <div className="py-3">
                <a
                  href="http://vault24-dev-dashboard.herokuapp.com/auth/login"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-view"
                >
                  Visit site
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-4 p-1">
            <div className="project d-flex flex-column justify-content-center align-items-start">
              <div className="icon__container d-flex justify-content-center align-items-center"></div>
              <div className="d-flex justify-content-center py-3">
                <h4> PSL </h4>
              </div>
              <div className="description">
                PSL/ PSF (possibilityspecialistsfoundation) is a fast growing
                skill acquisition and genuine empowerment company that gives
                customers 20% of their savings earning monthly.
              </div>
              <div className="py-3">
                <a
                  href="http://www.possibilityspecialistsfoundation.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-view"
                >
                  Visit site
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-4 p-1">
            <div className="project d-flex flex-column justify-content-center align-items-start">
              <div className="icon__container d-flex justify-content-center align-items-center"></div>
              <div className="d-flex justify-content-center py-3">
                <h4> Cv builder </h4>
              </div>
              <div className="description">
                Digit Cv is a platform that facilitates and simplifies the
                process of building CVs from start to finish.
              </div>
              <div className="py-3">
                <a
                  href="http://44.233.188.255/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-view"
                >
                  Visit site
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-4 p-1">
            <div className="project d-flex flex-column justify-content-center align-items-start">
              <div className="icon__container d-flex justify-content-center align-items-center"></div>
              <div className="d-flex justify-content-center py-3">
                <h4> Hemotely </h4>
              </div>
              <div className="description">
                Hemotely is a Job board that curates software and design jobs.
              </div>
              <div className="py-3">
                <a
                  href="https://hemotely.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-view"
                >
                  Visit site
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-4 p-1">
            <div className="project d-flex flex-column justify-content-center align-items-start">
              <div className="icon__container d-flex justify-content-center align-items-center"></div>
              <div className="d-flex justify-content-center py-3">
                <h4> iQ4Schools </h4>
              </div>
              <div className="description">
                IQ is a school management platform for schools and parents in
                Lagos.
              </div>
              <div className="py-3">
                <a
                  href="https://iq.torilo.ng/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-view"
                >
                  Visit site
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-4 p-1">
            <div className="project d-flex flex-column justify-content-center align-items-start">
              <div className="icon__container d-flex justify-content-center align-items-center"></div>
              <div className="d-flex justify-content-center py-3">
                <h4> Everypenny </h4>
              </div>
              <div className="description">
                Everypenny is money management and aggregation app that uses
                machine learning to analyze users cash flow and provide useful
                feedback. <span className="wip"> WIP </span>
              </div>
              <div className="py-3">
                <a
                  href="https://www.everypenny.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-view"
                >
                  Visit site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
