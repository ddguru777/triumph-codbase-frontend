import React from "react"

import { connect } from "react-redux"

import capbilitiesAction from "../../services/redux/capabilities/actions"
import { AddCapability } from "../../services/redux/capabilities/middleware"

import { Dashboard } from "../../components/Dashboard"
import { SearchPanel } from "./SearchPanel"
import { DataTable } from "../../components/DataTable"

import { ExportCSV } from "../../components/Excel"
import { RowArea } from "../../components/Common"

import styles from "./capabilities.module.scss"
// import classnames from "classnames"

import { CapabilityModal } from "../../components/Modals/Capability"

class Capabilities extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      capabilitiesModal: false,
      modalType: '',
      capability: {}
    }
  }

  handleAddDialog = () => {
    if (!this.state.capabilitiesModal) {
      this.setState({
        capabilitiesModal: true,
        modalType: 'ADD'
      });
    }
  }

  handleEditDialog = () => {
    
    if (!this.state.capabilitiesModal) {
      this.setState({
        capabilitiesModal: true,
        modalType: 'EDIT',
      });
    }
  }

  handleInsertCapability = (param) => {
    
    this.props.addNewCapability(param)
    this.toggle()
  }

  toggle = () => {
    this.setState({
      capabilitiesModal: !this.state.capabilitiesModal
    });
  }

  handleSelectDataRow = (index, capability) => {
    if (index === -1) return

    this.setState({
      capability: {...capability}
    })
    this.props.selectCapability(index, capability)
  }

  render() {
    const { filteredCapabilities, isSearch }  = this.props;
    return (
      <Dashboard menu="capabilities">
        <RowArea>
          <h5 className={styles.mark}>Triumph Group</h5>
          <ExportCSV  className={styles.btnExport} 
            fileName="capabilities" csvData={ filteredCapabilities.rows }>
            Export Data
          </ExportCSV>
        </RowArea>
        <CapabilityModal modal={this.state.capabilitiesModal} toggle={this.toggle}
          modalType={this.state.modalType} 
          insertNewCapability={(param) => this.handleInsertCapability(param)}
          data={this.state.capability} />
        <SearchPanel onAddCapability={(e) => this.handleAddDialog()} 
                    onUpdateCapability={(e) => this.handleEditDialog()} />
        <DataTable data={filteredCapabilities} isSearch={isSearch} onSelect={(index, capability) => this.handleSelectDataRow(index, capability)}/>
      </Dashboard>
    )
  }
}

const mapStateToProps = state => ({
  filteredCapabilities: state.getIn(['capabilities', 'filteredCapabilities']),
  isSearch: state.getIn(['capabilities', 'isSearch'])
})

const mapDispatchToProps = dispatch => ({
  addNewCapability: (params) => dispatch(AddCapability(params)),
  selectCapability: (index, capability) => {
    return dispatch(capbilitiesAction.selectCapability(index, capability))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Capabilities)
