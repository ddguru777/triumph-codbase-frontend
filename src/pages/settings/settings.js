import React from "react"

import { Button } from "reactstrap"

import { Dashboard } from "../../components/Dashboard"
import { SearchPanel } from "./SearchPanel"
import { DataTable } from "../../components/DataTable"

import styles from "./settings.module.scss"

import { settingsData } from "../../sampleData"

class Settings extends React.Component {
  render() {
    return (
      <Dashboard menu="settings">
        <Button color="primary" className={styles.btnExport}>
          Export Data
        </Button>
        <SearchPanel />
        <DataTable data={settingsData} />
      </Dashboard>
    )
  }
}

export default Settings
