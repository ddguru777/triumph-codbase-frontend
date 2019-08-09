import React from "react"

class RowArea extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default RowArea