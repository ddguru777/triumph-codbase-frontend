import React from "react"

import { connect } from "react-redux"

import { GetAllCapabilities, SearchCapabilities } from "../../../services/redux/capabilities/middleware"

import { Button, Input } from "reactstrap"
import {
  InputGroup,
  InputGroupAddon
 } from 'reactstrap';

import styles from "./SearchPanel.module.scss"
import classnames from "classnames"

class SearchPanel extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      airCraftSeries: "",
      airCraftModel:  "",
      engine: "",
      ata:  "",
      search: ""
    }
  }

  componentDidMount() {
    this.props.getAllCapabilities()
  }

  searchInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  search = () => {
    const params = {
      "Part Number": this.state.search,
      "Aircraft Series": this.state.airCraftSeries,
      "Aircraft Model": this.state.airCraftModel,
      "Engine": this.state.engine,
      "ATA": this.state.ata
    }
    
    const { allCapabilities } = this.props
    this.props.searchCapabilities({...allCapabilities}, params);
  }

  addNew = () => {
    this.props.onAddCapability()
  }

  updateExist = () => {
    if (this.props.selectIndex !== -1) {
      this.props.onUpdateCapability()
    }
  }

  render() {
    const {selectIndex} = this.props

    const btnOther = selectIndex >= 0 ? classnames(styles.btnOther, styles.btnEnable) 
                                                  : styles.btnOther
    return (
      <div className={styles.searchPanel}>
        <div className="row">
          <div className="col-sm-4">
            <div className={styles.formGroup}>
              <label className={styles.controlLabel} htmlFor="">
                Aircraft Series
              </label>
              <Input
                type="text"
                id="aircraft series"
                name="airCraftSeries"
                placeholder=""
                className="form-control"
                bsSize="sm"
                onChange={(e)=> this.searchInputChange(e) }
                value={ this.state.airCraftSeries }
              />
            </div>
          </div>
          <div className="col-sm-2">
            <div className={styles.formGroup}>
              <label className={styles.controlLabel} htmlFor="Aircraft Model">
                Aircraft Model
              </label>
              <Input
                type="text"
                id="Aircraft Model"
                name="airCraftModel"
                placeholder=""
                className="form-control"
                bsSize="sm"
                onChange={(e)=> this.searchInputChange(e) }
                value={ this.state.airCraftModel }
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col">Options</div>
            </div>
            <div className="row m-t-xs">
              <div className="col-sm-4">
                <div className={styles.formGroup}>
                  <Button className={styles.btnOther} size="sm" onClick={ (e) => this.addNew() } >Add New</Button>
                </div>
              </div>

              <div className="col-sm-4">
                <div className={styles.formGroup}>
                  <Button className={btnOther} size="sm" onClick={(e) => this.updateExist()}>Edit</Button>
                </div>
              </div>
              <div className="col-sm-4">
                <div className={styles.formGroup}>
                  <Button className={btnOther} size="sm">Save</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <div className={styles.formGroup}>
              <label className={styles.controlLabel} htmlFor="Engine">
                Engine
              </label>
              <Input
                type="text"
                id=""
                name="engine"
                placeholder=""
                className="form-control"
                bsSize="sm"
                onChange={(e)=> this.searchInputChange(e) }
                value={ this.state.engine }
              />
            </div>
          </div>
          <div className="col-sm-2">
            <div className={styles.formGroup}>
              <label className={styles.controlLabel} htmlFor="ATA">
                ATA
              </label>
              <Input
                type="text"
                id="ATA"
                name="ata"
                placeholder=""
                className="form-control"
                bsSize="sm"
                onChange={(e)=> this.searchInputChange(e) }
                value={ this.state.ata }
              />
            </div>
          </div>
          <div className="col-sm-8">
            <div className={styles.formGroup}>
              <label className={styles.controlLabel} htmlFor="Search">
                Search
              </label>
              <InputGroup size="sm">
                <Input
                  id="Search"
                  name="search"
                  placeholder="Search for a part, any part"
                  className="form-control"
                  onChange={(e)=> this.searchInputChange(e) }
                  value={ this.state.search }
                />
                <InputGroupAddon addonType="append">
                  <Button color="primary" className={ styles.btnSearch } onClick={(e) => this.search()}>Search</Button>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allCapabilities: state.getIn(['capabilities', 'allCapabilities']),
  selectIndex: state.getIn(['capabilities', 'selectIndex'])
})

const mapDispatchToProps = dispatch => ({
  getAllCapabilities: () => dispatch(GetAllCapabilities()),
  searchCapabilities: (source, target) => dispatch(SearchCapabilities(source, target))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel)
