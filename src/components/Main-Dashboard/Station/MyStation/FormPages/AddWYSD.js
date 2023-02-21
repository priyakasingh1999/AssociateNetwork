import { Box } from '@mui/material';
import React from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const AddWYSD = () => {
  return (
    <Container>
      <Row className='justify-content-center mb-2'>
        <Col md={5}>
          <Box className="AddWYSD">
          <Form.Text className='AddWYSD_Title'>
          <p>Add Station Statement</p>
          </Form.Text>
          <InputGroup>
          <Form.Control as="textarea" aria-label="with textarea"></Form.Control>
          </InputGroup>
          </Box>
        </Col>
      </Row>
    </Container>
  )
}

export default AddWYSD