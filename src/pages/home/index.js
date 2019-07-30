import React from "react"
import { Helmet } from "react-helmet"

import SideNavBar from "../../components/Navbar/SideNavBar"
import TopBar from "../../components/TopBar"

import Capabilities from "./capabilities"

import styles from "./home.module.scss"
import classnames from "classnames"

class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <div className="container-fluid">
          <div className="row">
            <div className="col pl-0 pr-0">
              <div className="container-flex">
                <div className={classnames(styles.navbar)}>
                  <SideNavBar />
                </div>
                <div className={styles.content}>
                  <div className="row">
                    <div className="col">
                      <TopBar />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">{/* <Capabilities /> */}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
