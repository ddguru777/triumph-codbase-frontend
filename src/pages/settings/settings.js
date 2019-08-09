import React from "react"

import { Button } from "reactstrap"

import { Dashboard } from "../../components/Dashboard"
import { SearchPanel } from "./SearchPanel"
import { DataTable } from "../../components/DataTable"

import { RowArea } from "../../components/Common"

import styles from "./settings.module.scss"

import { settingsData } from "../../sampleData"

class Settings extends React.Component {
  render() {
    return (
      <Dashboard menu="settings">
        <RowArea>
          <h5 className={styles.mark}>Triumph Group</h5>
          <Button  className={styles.btnExport} size="sm" color="success">
            Export Data
          </Button>
        </RowArea>

        <SearchPanel />
        <DataTable data={settingsData} />
      </Dashboard>
    )
  }
}

export default Settings
