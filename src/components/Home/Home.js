import React from "react"

import { SideNavBar } from "../Navbar/SideNavBar"
import { TopBar } from "../TopBar"

import styles from "./Home.module.scss"
import classnames from "classnames"

class Home extends React.Component {
  render() {
    const { menu } = this.props

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col pl-0 pr-0">
            <div className="container-flex">
              <div className={classnames(styles.navbar)}>
                <SideNavBar menu={menu} />
              </div>
              <div className={styles.content}>
                <div className="row">
                  <div className="col">
                    <TopBar />
                  </div>
                </div>
                <div className="row">
                  <div className="col">{this.props.children}</div>
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
