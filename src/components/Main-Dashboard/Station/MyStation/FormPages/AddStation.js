import React from 'react'
import { Form } from 'react-bootstrap';


const AddStation = () => {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <div className='d-flex justify-content-between align-items-center'>
    <Form.Label className='fw-bold text-dark'>Station Name:</Form.Label>
    <Form.Control type='text' placeholder="Enter Station Name" className='w-80'></Form.Control>
    </div>
    <Form.Text className="text-danger fs-13">
    Station name is required
    </Form.Text>
    
  </Form.Group> 
  )
}

export default AddStation