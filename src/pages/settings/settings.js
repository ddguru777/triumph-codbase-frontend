import React from "react"

import { Button } from "reactstrap"

import { Home } from "../../components/Home"
import { SearchPanel } from "./SearchPanel"
import { DataTable } from "../../components/DataTable"

import styles from "./settings.module.scss"

import { settingsData } from "../../sampleData"

class Settings extends React.Component {
  render() {
    return (
      <Home menu="settings">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Button color="primary" className={styles.btnExport}>
                Export Data
              </Button>
            </div>
          </div>
          <SearchPanel />
          <DataTable data={settingsData} />
        </div>
      </Home>
    )
  }
}

export default Settings
