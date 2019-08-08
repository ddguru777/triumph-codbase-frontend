import React from "react"

import { Button } from "reactstrap"

import { Dashboard } from "../../components/Dashboard"
import { SearchPanel } from "./SearchPanel"
import { DataTable } from "../../components/DataTable"

import styles from "./capabilities.module.scss"

import { capabilitiesData } from "../../sampleData"

class Capabilities extends React.Component {
  render() {
    return (
      <Dashboard menu="capabilities">
        <Button color="primary" className={styles.btnExport}>
          Export Data
        </Button>
        <SearchPanel />
        <DataTable data={capabilitiesData} />
      </Dashboard>
    )
  }
}

export default Capabilities
