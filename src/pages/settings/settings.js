import React from "react"

import { Dashboard } from "../../components/Dashboard"
import { SearchPanel } from "./SearchPanel"
import { DataTable } from "../../components/DataTable"

import { ExportCSV } from "../../components/Excel"
import { RowArea } from "../../components/Common"

import styles from "./settings.module.scss"

import { settingsData } from "../../sampleData"

class Settings extends React.Component {
  render() {
    return (
      <Dashboard menu="settings">
        <RowArea>
          <h5 className={styles.mark}>Triumph Group</h5>
          <ExportCSV  className={styles.btnExport} fileName="users" csvData={ settingsData.rows } >
            Export Data
          </ExportCSV>
        </RowArea>

        <SearchPanel />
        <DataTable data={settingsData} />
      </Dashboard>
    )
  }
}

export default Settings
