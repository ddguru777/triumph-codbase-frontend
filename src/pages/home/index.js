import React from "react"
import { Helmet } from "react-helmet"

import "./home.scss"

class Home extends React.Component {
  render() {
    return (
      <dv>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <div id="wrapper">
          <nav className="navbar-default navbar-static-side" role="navigation">
            <div className="sidebar-collapse">
              <ul className="nav metismenu" id="side-menu">
                <li className="nav-header">
                  <div className="dropdown profile-element">
                    <span className="clear">
                      <span className="block m-t-xs">
                        <strong className="font-bold">user@example.com</strong>
                      </span>
                    </span>
                  </div>
                </li>
                <li>
                  <a href="index.html">
                    <i />
                    Capabilities List
                  </a>
                </li>
                <li className="active">
                  <a href="minor.html">
                    <i /> Settings
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div id="page-wrapper" className="gray-bg">
            <div className="row border-bottom">
              <nav
                className="navbar navbar-static-top white-bg"
                role="navigation"
              >
                <ul className="nav navbar-top-links navbar-right">
                  <li>
                    <a href="#">
                      <i />
                      Log out
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="wrapper wrapper-content animated fadeInRight">
              <div className="row">
                <div className="col-lg-12">
                  <div className="text-center m-t-lg">
                    <h1>Welcome!</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dv>
    )
  }
}

export default Home
