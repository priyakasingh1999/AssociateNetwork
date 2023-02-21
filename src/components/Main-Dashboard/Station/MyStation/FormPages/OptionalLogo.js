import { Box } from '@mui/system';
import React from 'react'
import { Form } from 'react-bootstrap';


const OptionalLogo = () => {
  return (
    <Form.Group className="mb-3 optionalLogoBox" controlId="formFilelg">
    <Box className='d-flex justify-content-between align-items-center'>
    <Box className="w-30 my-auto"><Form.Label className='fw-bold text-dark' for="avtar" >Add station logo image</Form.Label></Box>
    <Box className="w-75"><Form.Control type='file' ></Form.Control></Box>
    </Box>
    {/* <Form.Text className="text-danger fs-13">
    Station name is required
    </Form.Text> */}
    
  </Form.Group> 
  )
}

export default OptionalLogo