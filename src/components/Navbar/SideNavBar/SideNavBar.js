import React from "react"
import { Nav, NavItem, NavLink } from "reactstrap"

import styles from "./SideNavBar.module.scss"
import classnames from "classnames"

class SideNavBar extends React.Component {
  render() {
    const { menu } = this.props

    let capabilitiesMenu = classnames(styles.navLink)
    let settingsMenu = classnames(styles.navLink)

    switch (menu) {
      case "capabilities":
        capabilitiesMenu = classnames(styles.navLink, styles.active)
        break
      case "settings":
        settingsMenu = classnames(styles.navLink, styles.active)
        break
      default:
        capabilitiesMenu = classnames(styles.navLink, styles.active)
    }

    return (
      <div>
        <Nav vertical>
          <div className={styles.panelUsername}>
            <strong className={styles.textUsername}>user@example.com</strong>
          </div>
          <NavItem>
            <NavLink href="./capabilities" className={capabilitiesMenu}>
              Capabilities List
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="./settings" className={settingsMenu}>
              Settings
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    )
  }
}

export default SideNavBar
