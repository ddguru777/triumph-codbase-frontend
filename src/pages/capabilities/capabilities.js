import React from "react"

import { Button } from "reactstrap"

import { Dashboard } from "../../components/Dashboard"
import { SearchPanel } from "./SearchPanel"
import { DataTable } from "../../components/DataTable"

import { RowArea } from "../../components/Common"

import styles from "./capabilities.module.scss"
import classnames from "classnames"

import { capabilitiesData } from "../../sampleData"

class Capabilities extends React.Component {
  render() {
    return (
      <Dashboard menu="capabilities">
        <RowArea>
          <h5 className={styles.mark}>Triumph Group</h5>
          <Button  className={styles.btnExport} size="sm" color="success">
            Export Data
          </Button>
        </RowArea>

        <SearchPanel />
        <DataTable data={capabilitiesData} />
      </Dashboard>
    )
  }
}

export default Capabilities
