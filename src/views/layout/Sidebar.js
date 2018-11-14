import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Sidebar extends Component {
  render() {
    return (
      <div class="sidebar" role="navigation">
        <div
          class="sidebar-nav collapse navbar-collapse show"
          id="side-menu-wrapper"
        >
          <ul
            class="nav navbar-nav navbar-collapse flex-column side-nav list-group"
            id="side-menu"
          >
            <li class="sidebar-search">
              <div class="input-group custom-search-form">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                />
                <span class="input-group-btn">
                  <button class="btn btn-white" type="button">
                    <i class="fa fa-search" />
                  </button>
                </span>
              </div>
            </li>
            <li class="list-group-item">
              <Link to="/">
                <i class="fa fa-dashboard fa-fw" /> Dashboard
              </Link>
            </li>
            <li class="list-group-item">
              <Link to="/users">
                <i class="fa fa-dashboard fa-fw" /> Users
              </Link>
            </li>
            <li class="list-group-item">
              <Link to="/posts">
                <i class="fa fa-dashboard fa-fw" /> Posts
              </Link>
            </li>
            <li class="list-group-item">
              <Link to="/login">
                <i class="fa fa-dashboard fa-fw" /> Login
              </Link>
            </li>
            <li class="list-group-item">
              <Link to="/register">
                <i class="fa fa-dashboard fa-fw" /> Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
