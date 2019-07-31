import React from "react"

import { Button } from "reactstrap"

import styles from "./SearchPanel.module.scss"
import classnames from "classnames"

class SearchPanel extends React.Component {
  render() {
    return (
      <div className={styles.searchPanel}>
        <div className="row">
          <div className="col-sm-4">
            <div className={styles.formGroup}>
              <label className={styles.controlLabel} for="">
                Aircraft Series
              </label>
              <input
                type="text"
                id="aircraft series"
                name="aircraft serries"
                value=""
                placeholder=""
                className="form-control"
              />
            </div>
          </div>
          <div className="col-sm-2">
            <div className={styles.formGroup}>
              <label className={styles.controlLabel} for="Aircraft Model">
                Aircraft Model
              </label>
              <input
                type="text"
                id="Aircraft Model"
                name="Aircraft Model"
                value=""
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
                    value=""
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
                    value=""
                    placeholder="Edit"
                    class="form-control"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    id="Save"
                    name="Save"
                    value=""
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
              <label className={styles.controlLabel} for="Engine">
                Engine
              </label>
              <input
                type="text"
                id=""
                name="Engine"
                value=""
                placeholder=""
                className="form-control"
              />
            </div>
          </div>
          <div class="col-sm-2">
            <div className={styles.formGroup}>
              <label className={styles.controlLabel} for="ATA">
                ATA
              </label>
              <input
                type="text"
                id="ATA"
                name="ATA"
                value=""
                placeholder=""
                className="form-control"
              />
            </div>
          </div>
          <div class="col-sm-4">
            <div className={styles.formGroup}>
              <label className={styles.controlLabel} for="Search">
                Search
              </label>
              <input
                type="text"
                id="Search"
                name="Search"
                value=""
                placeholder="Search for a part, any part"
                class="form-control"
              />
            </div>
          </div>
          <div class="col">
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
