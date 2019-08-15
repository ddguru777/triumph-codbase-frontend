import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, 
  Form, FormGroup, Label, Input} from 'reactstrap';

class CapabilityModal extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      modal: this.props.modal,
      partNumber: this.props.modalType === 'ADD' ? '' : this.props.data["Part Number"],
      description: '',
      basePart: '',
      airCraftSeries: '',
      airCraftModel: '',
      engine: '',
      ata: ''
    }

    // this.portNumberRef = React.createRef()
  }
  
  dlgInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    // console.log(this.state); 
  }

  addCapability = () => {
    const param = {
      idPart: this.props.modalType === 'ADD' ? '' : this.props.data["Id Part"],
      partNumber: this.state.partNumber,
      description: this.state.description,
      basePart: this.state.basePart,
      airCraftSeries: this.state.airCraftSeries,
      airCraftModel: this.state.airCraftModel,
      engine: this.state.engine,
      ata: this.state.ata
    }

    this.props.insertNewCapability(param);

    this.setState({
      partNumber: '',
      description: '',
      basePart: '',
      airCraftSeries: '',
      airCraftModel: '',
      engine: '',
      ata: ''
    })
  }

  cancel = () => {
    this.setState({
      partNumber: '',
      description: '',
      basePart: '',
      airCraftSeries: '',
      airCraftModel: '',
      engine: '',
      ata: ''
    })
    this.props.toggle();
  }

  componentWillReceiveProps() {
    this.setState({
      partNumber: this.props.modalType === 'ADD' ? '' : this.props.data["Part Number"],
      description: this.props.modalType === 'ADD' ? '' : this.props.data["Description"],
      basePart: this.props.modalType === 'ADD' ? '' : this.props.data["Base Part"],
      airCraftSeries: this.props.modalType === 'ADD' ? '' : this.props.data["Aircraft Series"],
      airCraftModel: this.props.modalType === 'ADD' ? '' : this.props.data["Aircraft Model"],
      engine: this.props.modalType === 'ADD' ? '' : this.props.data["Engine"],
      ata: this.props.modalType === 'ADD' ? '' : this.props.data["Ata"],
    })
  }
  render() {
    const modalTitle = this.props.modalType === 'ADD' ? 'Add Capability' : 'Edit Capability'
   
    return (
      <div>
        
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{modalTitle}</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="partNumber">Part Number</Label>
                <Input type="text" name="partNumber" placeholder="" bsSize="sm" 
                  value={this.state.partNumber} onChange={(e) => this.dlgInputChange(e)} />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input type="text" name="description" placeholder="" bsSize="sm"
                  value={this.state.description} onChange={(e) => this.dlgInputChange(e)}/>
              </FormGroup>
              <FormGroup>
                <Label for="basePart">Base Part</Label>
                <Input type="text" name="basePart" placeholder="" bsSize="sm"
                  value={this.state.basePart} onChange={(e) => this.dlgInputChange(e)}/>
              </FormGroup>
              <FormGroup>
                <Label for="airCraftSeries">Aircraft Series</Label>
                <Input type="text" name="airCraftSeries" placeholder="" bsSize="sm"
                  value={this.state.airCraftSeries} onChange={(e) => this.dlgInputChange(e)}/>
              </FormGroup>
              <FormGroup>
                <Label for="airCraftModel">AircraftModel</Label>
                <Input type="text" name="airCraftModel" placeholder="" bsSize="sm"
                  value={this.state.airCraftModel} onChange={(e) => this.dlgInputChange(e)}/>
              </FormGroup>
              <FormGroup>
                <Label for="engine">Engine</Label>
                <Input type="text" name="engine" placeholder="" bsSize="sm"
                  value={this.state.engine} onChange={(e) => this.dlgInputChange(e)}/>
              </FormGroup>
              <FormGroup>
                <Label for="ata">ATA</Label>
                <Input type="text" name="ata" placeholder="" bsSize="sm"
                  value={this.state.ata} onChange={(e) => this.dlgInputChange(e)}/>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" size="sm" onClick={(e) => this.addCapability() }>Add</Button>{' '}
            <Button color="danger" size="sm" onClick={(e) => this.cancel() }>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CapabilityModal