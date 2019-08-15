import React from 'react';
import { Toast, ToastBody, ToastHeader} from 'reactstrap';

class CToast extends React.Component {
  render() {
    const {type, title, msg} = this.props
    return (
      <Toast>
        <ToastHeader icon={type}>
          {title}
        </ToastHeader>
        <ToastBody>
          {msg}
        </ToastBody>
      </Toast >
    )
  }
}

export default CToast