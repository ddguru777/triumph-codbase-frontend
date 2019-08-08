import React from "react"

import { SideNavBar } from "../Navbar/SideNavBar"
import { TopBar } from "../TopBar"

import "./Dashboard.css"
import styles from "./Dashboard.module.scss"
import classnames from "classnames"

class Dashboard extends React.Component {
  
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }
  
  toggle = () => {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  
  render() {
    const toggleClass = this.state.collapse ? "d-flex toggled" : "d-flex"
    const { menu } = this.props

    return (
      <div className={toggleClass} id="wrapper">
        <div className={classnames("border-right", styles.bgDark)} id="sidebar-wrapper">
          <SideNavBar menu={menu} />
        </div>

        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <button className="btn" onClick={this.toggle}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>

          <div className="container-fluid">
            <div className="row">
              <div className="col">{this.props.children}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
