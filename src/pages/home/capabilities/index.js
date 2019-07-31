import React from "react"

import { Button } from "reactstrap"

import { SearchPanel } from "./SearchPanel"
import { DataTable } from "../../../components/DataTable"

import styles from "./capabilities.module.scss"
import classnames from "classnames"

class Capabilities extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Button color="primary" className={styles.btnExport}>
              Export Data
            </Button>
          </div>
        </div>
        <SearchPanel />
        {/* <DataTable /> */}
      </div>
    )
  }
}

export default Capabilities
