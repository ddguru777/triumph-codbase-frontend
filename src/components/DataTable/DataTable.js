import React from "react"

import styles from "./DataTable.module.scss"

class DataTable extends React.Component {
  render() {
    // Data
    const dataColumns = this.props.data.columns
    const dataRows = this.props.data.rows

    let tableHeaders = (
      <thead>
        <tr>
          {dataColumns.map(function(column, index) {
            return <th key={index}>{column}</th>
          })}
        </tr>
      </thead>
    )

    var tableBody = dataRows.map(function(row, index) {
      return (
        <tr key={index}>
          {dataColumns.map(function(column, index) {
            return <td key={index}>{row[column]}</td>
          })}
        </tr>
      )
    })

    return (
      <div className={styles.tablePanel}>
        <table className="table table-bordered table-hover" width="100%">
          {tableHeaders}
          <tbody>{tableBody}</tbody>
        </table>
      </div>
    )
  }
}

export default DataTable
