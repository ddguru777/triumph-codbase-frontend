import React from "react"

import { Button, Input } from "reactstrap"
import {
  InputGroup,
  InputGroupAddon
 } from 'reactstrap';

import styles from "./SearchPanel.module.scss"

class SearchPanel extends React.Component {
  render() {
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
                name="aircraft serries"
                placeholder=""
                className="form-control"
                bsSize="sm"
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
                name="Aircraft Model"
                placeholder=""
                className="form-control"
                bsSize="sm"
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
                  <Button className={styles.btnOther} size="sm">Add New</Button>
                </div>
              </div>

              <div className="col-sm-4">
                <div className={styles.formGroup}>
                  <Button className={styles.btnOther} size="sm">Edit</Button>
                </div>
              </div>
              <div className="col-sm-4">
                <div className={styles.formGroup}>
                  <Button className={styles.btnOther} size="sm">Save</Button>
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
                name="Engine"
                placeholder=""
                className="form-control"
                bsSize="sm"
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
                name="ATA"
                placeholder=""
                className="form-control"
                bsSize="sm"
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
                  name="Search"
                  placeholder="Search for a part, any part"
                  className="form-control"
                />
                <InputGroupAddon addonType="append">
                  <Button color="primary" className={ styles.btnSearch }>Search</Button>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchPanel
