import React from "react"
import { Button } from "reactstrap"
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

class ExportCSV extends React.Component {

  exportToCSV = (csvData, fileName) => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], {type: fileType});
    FileSaver.saveAs(data, fileName + fileExtension);
  }

  render() {
    const { csvData, fileName, className } = this.props

    return (
      <Button className={ className } size="sm" color="success" onClick={(e) => this.exportToCSV(csvData, fileName)}>
        { this.props.children }
      </Button>)
    }
}

export default ExportCSV
