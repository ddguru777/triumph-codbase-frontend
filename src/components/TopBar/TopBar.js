import React from "react"

import { Button } from "reactstrap"

import styles from "./TopBar.module.scss"

class TopBar extends React.Component {
  render() {
    return (
      <div className={styles.topbar}>
        <Button className={styles.logout}>Log Out</Button>
      </div>
    )
  }
}

export default TopBar
