import React from "react"

import "./DataTable.css"

class DataTable extends React.Component {
  render() {
    // Data
    const dataColumns = this.props.data.columns
    const dataRows = this.props.data.rows

    let tableHeaders = (
      <tr>
        {dataColumns.map(function(column, index) {
          return <th key={index}>{column}</th>
        })}
      </tr>
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
      <div className="table-panel">
        <table className="table table-bordered table-hover responsive-table">
          <thead>
            { tableHeaders }
          </thead>
          <tbody>
            { tableBody }
          </tbody>
        </table>
      </div>
    )
  }
}

export default DataTable
