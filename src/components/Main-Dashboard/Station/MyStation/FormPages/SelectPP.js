import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, green } from '@mui/material/colors';
import { Box } from '@mui/system';
import LockSharpIcon from '@mui/icons-material/LockSharp';

const SelectPP = () => {

   return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Container>
          <Row className='selectpp py-1'>
            <Col md={2}>
              <Stack sx={{border:"5px solid white"}}>
              <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
               <LockSharpIcon/>
              </Avatar>
              </Stack>
            </Col>
            <Col md={10} className="my-auto">
              <Box className="selectpp_box">
                <Form.Text>
                Private
                </Form.Text>
                <Form.Text>
                Stations will only be visible to members
                </Form.Text>
              </Box>
              
            </Col>
          </Row>
          <Row className='selectpp py-1 mt-2'>
            <Col md={2}>
              <Stack sx={{border:"5px solid white"}}>
              <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
               <img src='./img/publicweb.png' className='img-fluid'/>
              </Avatar>
              </Stack>
            </Col>
            <Col md={10} className="my-auto">
              <Box className="selectpp_box">
                <Form.Text>
                Public
                </Form.Text>
                <Form.Text>
                Associates can request to join if they are not members
                </Form.Text>
              </Box>
              
            </Col>
          </Row>
        </Container>
                
    </Form.Group> 
  )
}

export default SelectPP