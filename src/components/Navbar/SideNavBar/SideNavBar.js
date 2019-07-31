import React from "react"
import { Nav, NavItem, NavLink } from "reactstrap"

import styles from "./SideNavBar.module.scss"
import classnames from "classnames"

class SideNavBar extends React.Component {
  render() {
    return (
      <div>
        <Nav vertical>
          <div className={styles.panelUsername}>
            <strong className={styles.textUsername}>user@example.com</strong>
          </div>
          <NavItem>
            <NavLink
              href="./capabilities"
              className={classnames(styles.navLink, styles.active)}
            >
              Capabilities List
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="./settings" className={styles.navLink}>
              Settings
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    )
  }
}

export default SideNavBar
