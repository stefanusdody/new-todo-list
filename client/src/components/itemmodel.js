import React, {Component} from 'react';
import {
   Button,
   Modal,
   ModalHeader,
   ModalBody,
   Form,
   Container,
   FormGroup,
   Label,
   Input
 } from 'reactstrap';
 import {connect} from 'react-redux';
 import {addItem} from '../actions/itemactions';


 class ItemModal extends Component {
   state = {
     modal: false,
     name: ''
   }

   toggle = () => {
     this.setState({
       modal: !this.state.modal
     });
   }

   onChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
   }

   onSubmit = e => {
     e.preventDefault();

     const newItem = {
       name: this.state.name
     }

     // Add item via additem actions
     this.props.addItem(newItem);

     //close Modal
     this.toggle();
   }

   render() {
     return(
       <Container>
         <Button
          color="dark"
          style={{marginBottom: '2rem', marginTop: '5rem'}}
          onClick={this.toggle}
          block
         >
          Add Shopping Item
         </Button>
         <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
         >
           <ModalHeader toggle={this.toggle}>
            Add To Shopping
           </ModalHeader>
           <ModalBody>
             <Form onSubmit={this.onSubmit}>
               <FormGroup>
                  <Label for='item'>
                   Item
                  </Label>
                    <Input
                      type='text'
                      name='name'
                      id='item'
                      placeholder='add shopping item'
                      onChange={this.onChange}
                    />
                    <Button
                     color="dark"
                     style={{marginTop: '2rem'}}
                     block
                     >
                     Add Item
                    </Button>
               </FormGroup>
             </Form>
           </ModalBody>
         </Modal>
       </Container>
     )
   }
 }

const mapStateToProps = state => ({
  item: state.item
});

 export default connect(mapStateToProps, {addItem})(ItemModal);
