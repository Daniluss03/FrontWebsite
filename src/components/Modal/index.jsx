import React from 'react'
import './Modal.css'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTimes } from 'react-icons/fa'

const Modal = props => {
if(!props.show){
    return null
}

  return (
   <div className='modal' onClick={props.onClose}>
    <div className='container' onClick={e=>e.stopPropagation()}>
        <div className='header'>
            <h1 className='title'> CONTACT FORM
               
       
            </h1>
           
        </div>
       
        <div className='body'>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <button variant="primary" type="submit">
        Submit
      </button>
    </Form>
        </div>
        <div className='footer'>
            <button  onClick={props.onClose}className="button">close</button>
        
        </div>
    </div>
   </div>
  )
}

export default Modal