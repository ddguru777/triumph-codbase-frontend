import React from "react"

import { Button } from "reactstrap"

import styles from "./SearchPanel.module.scss"

class SearchPanel extends React.Component {
  render() {
    return (
      <div className={styles.searchPanel}>
        <div className="row">
          <div className="col-sm-4">
            <div className={styles.formGroup}>
              <label className={styles.controlLabel} htmlFor="">
                Manage
              </label>
              <input
                type="text"
                id="aircraft series"
                name="aircraft serries"
                placeholder=""
                className="form-control"
              />
            </div>
          </div>
          <div className="col-sm-2">
            <div className={styles.formGroup}>
              <label className={styles.controlLabel} htmlFor="Aircraft Model">
                Department
              </label>
              <input
                type="text"
                id="Aircraft Model"
                name="Aircraft Model"
                placeholder=""
                className="form-control"
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
                  <input
                    type="text"
                    id="Add New"
                    name="Add New"
                    placeholder="Add New"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-sm-4">
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    id="Edit"
                    name="Edit"
                    placeholder="Edit"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    id="Save"
                    name="Save"
                    placeholder="Save"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <div className={styles.formGroup}>
              <label className={styles.controlLabel} htmlFor="Engine">
                Location
              </label>
              <input
                type="text"
                id=""
                name="Engine"
                placeholder=""
                className="form-control"
              />
            </div>
          </div>
          <div className="col-sm-2">
            <div className={styles.formGroup}>
              <label className={styles.controlLabel} htmlFor="ATA">
                Office
              </label>
              <input
                type="text"
                id="ATA"
                name="ATA"
                placeholder=""
                className="form-control"
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className={styles.formGroup}>
              <label className={styles.controlLabel} htmlFor="Search">
                Search
              </label>
              <input
                type="text"
                id="Search"
                name="Search"
                placeholder="Search for a user"
                className="form-control"
              />
            </div>
          </div>
          <div className="col">
            <div className={styles.formGroup}>
              <Button color="primary" className={styles.btnSearch}>
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchPanel
