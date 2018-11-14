import React, { Component } from "react";
import Sidebar from "./Sidebar";

export class Navbar extends Component {
  render() {
    return (
      <header class="align-items-start app-header flex-column flex-md-row navbar navbar-expand-md navbar-light">
        <div class="align-items-baseline d-flex flex-row navbar-brand p-lg-3 pl-3 pr-3 pt-3">
          <a class="" href="#">
            SB Admin v2.0
          </a>
          <button
            class="collapsed ml-auto navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#side-menu-wrapper"
            aria-controls="side-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
            
          >
            <span class="navbar-toggler-icon" />
          </button>
        </div>

        <ul class="nav navbar-nav ml-md-auto flex-row navbar-top-links">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle nav-link"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa fa-envelope fa-fw" />
            </a>
            <div class="dropdown-menu dropdown-messages dropdown-menu-right">
              <a class="dropdown-item" href="#">
                <div>
                  <strong>John Smith</strong>
                  <span class="float-right text-muted">
                    <em>Yesterday</em>
                  </span>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque eleifend...
                </div>
              </a>
              <div class="dropdown-divider" />
              <a class="dropdown-item" href="#">
                <div>
                  <strong>John Smith</strong>
                  <span class="float-right text-muted">
                    <em>Yesterday</em>
                  </span>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque eleifend...
                </div>
              </a>
              <div class="dropdown-divider" />
              <a class="dropdown-item" href="#">
                <div>
                  <strong>John Smith</strong>
                  <span class="float-right text-muted">
                    <em>Yesterday</em>
                  </span>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque eleifend...
                </div>
              </a>
              <div class="dropdown-divider" />
              <a class="dropdown-item see-more text-center" href="#">
                <strong>Read All Messages</strong>
                <i class="fa fa-angle-right" />
              </a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle nav-link"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa fa-tasks fa-fw" />
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-tasks">
              <a class="dropdown-item" href="#">
                <div>
                  <p>
                    <strong>Task 1</strong>
                    <span class="float-right text-muted">40% Complete</span>
                  </p>
                  <div class="progress active">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated bg-success"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{width: '40%'}}
                    >
                      <span class="sr-only">40% Complete (success)</span>
                    </div>
                  </div>
                </div>
              </a>
              <div class="dropdown-divider" />
              <a class="dropdown-item" href="#">
                <div>
                  <p>
                    <strong>Task 2</strong>
                    <span class="float-right text-muted">20% Complete</span>
                  </p>
                  <div class="progress active">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                      role="progressbar"
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{width: '20%'}}
                    >
                      <span class="sr-only">20% Complete</span>
                    </div>
                  </div>
                </div>
              </a>
              <div class="dropdown-divider" />
              <a class="dropdown-item" href="#">
                <div>
                  <p>
                    <strong>Task 3</strong>
                    <span class="float-right text-muted">60% Complete</span>
                  </p>
                  <div class="progress active">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{width: '60%'}}
                    >
                      <span class="sr-only">60% Complete (warning)</span>
                    </div>
                  </div>
                </div>
              </a>
              <div class="dropdown-divider" />
              <a class="dropdown-item" href="#">
                <div>
                  <p>
                    <strong>Task 4</strong>
                    <span class="float-right text-muted">80% Complete</span>
                  </p>
                  <div class="progress active">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{width: '80%'}}
                    >
                      <span class="sr-only">80% Complete (danger)</span>
                    </div>
                  </div>
                </div>
              </a>
              <div class="dropdown-divider" />
              <a class="dropdown-item see-more text-center" href="#">
                <strong>See All Tasks</strong>
                <i class="fa fa-angle-right" />
              </a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle nav-link"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa fa-bell fa-fw" />
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-alerts">
              <a class="dropdown-item" href="#">
                <div>
                  <i class="fa fa-comment fa-fw" /> New Comment
                  <span class="float-right text-muted small">
                    4 minutes ago
                  </span>
                </div>
              </a>
              <div class="dropdown-divider" />
              <a class="dropdown-item" href="#">
                <div>
                  <i class="fa fa-twitter fa-fw" /> 3 New Followers
                  <span class="float-right text-muted small">
                    12 minutes ago
                  </span>
                </div>
              </a>
              <div class="dropdown-divider" />
              <a class="dropdown-item" href="#">
                <div>
                  <i class="fa fa-envelope fa-fw" /> Message Sent
                  <span class="float-right text-muted small">
                    4 minutes ago
                  </span>
                </div>
              </a>
              <div class="dropdown-divider" />
              <a class="dropdown-item" href="#">
                <div>
                  <i class="fa fa-tasks fa-fw" /> New Task
                  <span class="float-right text-muted small">
                    4 minutes ago
                  </span>
                </div>
              </a>
              <div class="dropdown-divider" />
              <a class="dropdown-item" href="#">
                <div>
                  <i class="fa fa-upload fa-fw" /> Server Rebooted
                  <span class="float-right text-muted small">
                    4 minutes ago
                  </span>
                </div>
              </a>
              <div class="dropdown-divider" />
              <a class="dropdown-item see-more text-center" href="#">
                <strong>See All Alerts</strong>
                <i class="fa fa-angle-right" />
              </a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle nav-link"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa fa-user fa-fw" />
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-user">
              <a class="dropdown-item" href="#">
                <i class="fa fa-user fa-fw" /> User Profile
              </a>
              <a class="dropdown-item" href="#">
                <i class="fa fa-gear fa-fw" /> Settings
              </a>
              <div class="dropdown-divider" />
              <a class="dropdown-item" href="login.html">
                <i class="fa fa-sign-out fa-fw" /> Logout
              </a>
            </div>
          </li>
        </ul>
      </header>
    );
  }
}

export default Navbar;
