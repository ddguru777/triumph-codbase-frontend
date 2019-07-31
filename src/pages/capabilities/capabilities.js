import React from "react"

import { Button } from "reactstrap"

import { Home } from "../../components/Home"
import { SearchPanel } from "./SearchPanel"
import { DataTable } from "../../components/DataTable"

import styles from "./capabilities.module.scss"
import classnames from "classnames"

import { capabilitiesData } from "../../sampleData"

class Capabilities extends React.Component {
  render() {
    return (
      <Home>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Button color="primary" className={styles.btnExport}>
                Export Data
              </Button>
            </div>
          </div>
          <SearchPanel />
          <DataTable data={capabilitiesData} />
        </div>
      </Home>
    )
  }
}

export default Capabilities
