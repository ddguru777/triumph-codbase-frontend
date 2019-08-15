import React from "react"

import "./DataTable.css"

class DataTable extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      selIndex: -1
    }
  }

  selectTr = (index) => {
    this.setState({
      selIndex: index
    })

    this.props.onSelect(index, this.props.data.rows[index])
  }

  render() {
    // Data
    const dataColumns = this.props.data.columns
    const dataRows = this.props.data.rows
    const isSearch = this.props.isSearch

    const thisObj = this;

    let tableHeaders = (
      <tr>
        {dataColumns.map(function(column, index) {
          return <th key={index}>{column}</th>
        })}
      </tr>
    )

    var tableBody = dataRows.map(function(row, index) {
      let className = isSearch ? "filtered-row" : ""
      className = className + (index === thisObj.state.selIndex ? " sel-tr" : "")

      return (
        <tr key={index} className={className} onClick={(e) => thisObj.selectTr(index)}>
          {dataColumns.map(function(column, index) {
            return <td key={index}>{row[column]}</td>
          })}
        </tr>
      )
    })

    return (
      <div className="table-panel">
        <table className="table table-bordered responsive-table">
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
