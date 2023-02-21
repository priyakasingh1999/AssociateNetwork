import React, { useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box } from '@mui/system';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CancelIcon from '@mui/icons-material/Cancel';
import { InputLabel, MenuItem, Typography, Select } from '@mui/material';
import { FormControl } from 'react-bootstrap';



const OptionalPhoto = () => {
  let left=[["l","m"]]
  const [opencolor , setOpenColor] = useState(false);
  const [opencolors , setOpenColors] = useState(false);
  const [cname , setcname] = useState("selct cfrh5fdolor=");
  const [isChecked, setIsChecked] = useState(false);


  console.log(opencolor)
  

  const handleClick = React.useCallback(() => {
    setOpenColor("red")
  }, [opencolor]);
  const handleClicks = React.useCallback(() => {
    setOpenColors(!opencolors)
  }, [opencolors]);
  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }


 const  FONTSLIST = [
    {
        name: "Source Sans Pro",
        face: "Source+Sans+Pro:900italic",
        fontFamily: "Source Sans Pro",
        fontWeight: 900,
        fontStyle: 'italic'
    },
    {
        name: "Quattrocento Sans",
        face: "Quattrocento+Sans",
        fontWeight: 500,
        fontFamily: 'Quattrocento Sans'
    },
    {
        name: "Ubuntu",
        face: "Ubuntu:700",
        fontFamily: 'Ubuntu'
    },
    {
        name: "Arizonia",
        face: "Arizonia",
        fontFamily: 'Arizonia'
    } ,
    {
        name: "Lora",
        face: "Lora:700",
        fontFamily: "Lora",
        fontWeight: 700
    },
    {
        name: "Sansita One",
        face: "Sansita+One",
        fontFamily: "Sansita One"
    },
    {
        name: "Armata",
        face: "Armata",
        fontFamily: "Armata"
    },
    {
        name: "Black Ops One",
        face: "Black+Ops+One",
        fontFamily: "Black Ops One"
    },
    {
        name: "Russo One",
        face: "Russo+One",
        fontFamily: "Russo One"
    }
]
const Color = [
    {
      "font-size":12,
      "color": "black",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,255,1],
        "hex": "#000"
      }
    },
    {
      "color": "white",
      "category": "value",
      "code": {
        "rgba": [0,0,0,1],
        "hex": "#FFF"
      }
    },
    {
      "color": "red",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,0,0,1],
        "hex": "#FF0"
      }
    },
    {
      "color": "blue",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [0,0,255,1],
        "hex": "#00F"
      }
    },
    {
      "color": "yellow",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,0,1],
        "hex": "#FF0"
      }
    },
    {
      "color": "green",
      "category": "hue",
      "type": "secondary",
      "code": {
        "rgba": [0,255,0,1],
        "hex": "#0F0"
      }
    }
]
const[font,setfont]=useState(FONTSLIST)
  return (
    <Container>
      <Row className='justify-content-start optionalPhoto_Box'>
        <Col md={8}>
          <Box className="optionalPhoto mb-2">
            <Box className="">
              <AddCircleOutlineIcon/>
              <Box className="text_style">
                <Box className="border-bottom head">
                  <Box></Box>
                  <Box><CancelIcon/></Box>
                </Box>
                <Box>
                  <Container>
                  <Row className='justify-content-start mt-2'>
                    <Col md={8} className="text-left">
                      <Typography>Text Style:</Typography>
                      <Box className="my-1">
                        <Row>
                          <Col md={3}>
                          <div><label>Font</label></div>
                          </Col>
                          <Col md={9}>
                          <div>
                        <select className='form-control fs-16'>
                         
                          {
                        font  &&    font.map((f)=>{
                              const {name , face, fontFamily,fontWeight,fontStyle} = f;
                              return(
                               
                                  <option key={name} style={{
                                 fontFamily:{fontFamily},
                                 fontWeight:{fontWeight},
                                 fontStyle:{fontStyle}

                          }}>{name}</option>
                             
                              )
                            })
                          }
                        </select>
                        </div>
                          </Col>
                        </Row>
                      </Box>

                      <Box className="my-1">
                        <Row>
                          <Col md={3}>
                          <div><label>Color</label></div>
                          </Col>
                          <Col md={9}>
                          <div className='colordropdown'>
                          <div className='select-color'>
                            <span onClick={handleClick}>{cname}</span>
                          </div>
                       
                        <ul>
                          {
                        Color  &&    Color.map((c)=>{
                              const {color,category,type,code} = c;
                              console.log(color);
                              return(
                               <div>
                        {opencolor &&
                                  <li className='list'>
                                   <span className='w-25 h-25' style={{backgroundColor:color , width:"10px",color:color }}>.......</span> <span>{code.hex}</span>
                                  </li>
                        }
                                  </div>
                              )
                            })
                          }
                      </ul>
                        </div>
                          </Col>
                        </Row>
                        
                      </Box>

                      {/* background  */}
                      <Box className="my-1">
                        <Row>
                          <Col md={3}>
                          <div><label>Background</label></div>
                          </Col>
                          <Col md={9}>
                          <div className='colordropdown'>
                          <div className='select-color'>
                            <span onClick={handleClicks}>{cname}</span>
                          </div>
                       
                        <ul>
                          {
                        Color  &&    Color.map((c)=>{
                              const {color,category,type,code} = c;
                              console.log(color);
                              return(
                               <div>
                        {opencolors &&
                                  <li className='list'>
                                   <span className='w-25 h-25' style={{backgroundColor:color , width:"10px",color:color }}>.......</span> <span>{code.hex}</span>
                                  </li>
                        }
                                  </div>
                              )
                            })
                          }
                      </ul>
                        </div>
                          </Col>
                        </Row>
                        
                      </Box>
                      
                      <Box className="my-1">
                        <Row>
                          <Col md={3}>
                          <div><label>Font Size</label></div>
                          </Col>
                          <Col md={9}>
                          <div>
                        <select className='form-control fs-16'>
                         
                          {
                        font  &&    font.map((f)=>{
                              const {name , face, fontFamily,fontWeight,fontStyle} = f;
                              return(
                               
                                  <option key={name} style={{
                                 fontFamily:{fontFamily},
                                 fontWeight:{fontWeight},
                                 fontStyle:{fontStyle}

                          }}>{name}</option>
                             
                              )
                            })
                          }
                        </select>
                        </div>
                          </Col>
                        </Row>
                      </Box>
                      
                      
                      <Box>
                    <label className='me-2'>Apply Text Effect </label>
                    <input type="checkbox"/>
                  </Box>
                      </Col>
                  
                  <Col  md={3} className="">
                  <Box>
                  <Typography>Text Position:</Typography>
                  </Box>
                  <Box className="head text-position my-1">
                    {

                    }
                    <input type="checkbox" onClick={ setIsChecked=""} name="check" className='px-2 w-100'/>
                    <input type="checkbox" name="check" className='px-2 w-100'/>
                    <input type="checkbox" name="check" className='px-2 w-100'/>
                  </Box>
                  <Box className="head text-position my-1">
                    <input type="checkbox" name="check" className='px-2 w-100'/>
                    <input type="checkbox" name="check" className='px-2 w-100'/>
                    <input type="checkbox" name="check" className='px-2 w-100'/>
                  </Box>
                  <Box className="head text-position my-1">
                    <input type="checkbox" name="check" className='px-2 w-100'/>
                    <input type="checkbox" name="check" className='px-2 w-100'/>
                    <input type="checkbox" name="check" className='px-2 w-100'/>
                  </Box>
                  </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                    <div className='mb-3'>
                      <button type="submit" className='btn-primary border-0 rounded px-3'>Save</button>
                    </div>
                    </Col>
                  </Row>
                  </Container>
                </Box>
              </Box>
            </Box>
            <Box>
              <p>Optional: Add Station name overlaid on photo</p>
            </Box>
          </Box>
        </Col>
      </Row>
    </Container>
  )
}

export default OptionalPhoto