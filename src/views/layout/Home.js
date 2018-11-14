import React, { Component } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import routes from "../../routes";
import { Switch, Route } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div id="wrapper">
        <Navbar />
        <div class="d-md-flex">
          <Sidebar />
          <div id="page-wrapper" class="p-4">
            <div class="row">
              <div class="col-lg-12">
                <Switch>
                  {routes.map((route, index) => {
                    return route.component ? (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        render={props => <route.component {...props} />}
                      />
                    ) : null;
                  })}
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
