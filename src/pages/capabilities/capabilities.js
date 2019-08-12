import React from "react"

import { Dashboard } from "../../components/Dashboard"
import { SearchPanel } from "./SearchPanel"
import { DataTable } from "../../components/DataTable"

import { ExportCSV } from "../../components/Excel"
import { RowArea } from "../../components/Common"

import styles from "./capabilities.module.scss"
// import classnames from "classnames"

import { capabilitiesData } from "../../sampleData"

class Capabilities extends React.Component {
  render() {
    return (
      <Dashboard menu="capabilities">
        <RowArea>
          <h5 className={styles.mark}>Triumph Group</h5>
          <ExportCSV  className={styles.btnExport} 
            fileName="capabilities" csvData={ capabilitiesData.rows }>
            Export Data
          </ExportCSV>
        </RowArea>

        <SearchPanel />
        <DataTable data={capabilitiesData} />
      </Dashboard>
    )
  }
}

export default Capabilities
