import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import "./MyStation.css";
import MyStationForm from "./MyStationForm";
import RecentSessions from "../RecentSessions/RecentSessions";
import MyStationData from "./MyStationData";
import AddNewSession from "../RecentSessions/AddNewSession";
import AddEditStation from "../RecentSessions/AddEditStations";
import Huddle  from './Huddle';
import MyStationp from './Mystationp'
import Tooltip from '@mui/material/Tooltip';
const MyStation = () => {
  const [show, setIsShown] = useState(false);
  const [option, setOption] = useState(false);
  const [form, setForm] = useState(false);
  const [width,setwidth]=useState(6)
  const [currentstation, currentStation] = useState(false);
  const [value, setValue] = useState(0);
  const [changestation , setchangestation]=useState(true)
 
  const [htext, sethtext] = useState([
    "My Station",
    "Huddle",
    "My Station",
    "Huddle"
  ]);
  let datas=[
    {
    id:1,
    title:"hih"
  },
  {
    id:2,title:"ebfgiueg"
  }
]
 const widthadjust =()=>{
  if(width===6){
  
    setwidth(3)
  }else{
    setwidth(6)
  }
console.log(width)
 }
  return (
    <Container className="my-3">
      {form && <MyStationForm setForm={setForm} form={form} />}
      <Row>
        <Col md={6}>
        {currentstation && <AddEditStation currentStation={currentStation} currentstation={!currentstation} /> }
        </Col>
      </Row>
      <Row>
        <Col md={8} className="pe-0">
          <RecentSessions />
        </Col>
        <Col md={4}>
      
          <div>
            <div className="Station-head">
              <div>
                <ul>
                  <li>
                  <Tooltip title="Station File">
                    <a>
                    
                      <img src="./img/upload-white.png" />
                    
                    </a>
                    </Tooltip>
                  </li>
                  <li>
                  <Tooltip title="Station Board">
                    <a>
                      <img src="./img/mystation2-white.png" />
                    </a>
                  </Tooltip>
                  </li>
                </ul>
              </div>
              <div>{htext[value]}</div>
              <div>
                <ul>
                  <li>
                  <Tooltip title="Add/Edit Station">
                    <a>
                      
                      <img src="./img/station-icon3.png"  onClick={()=>{
                        currentStation(!currentstation)
                      }}/>
                    </a>
                    </Tooltip>
                  </li>
                  <li>
                  <Tooltip title="Back to Huddle">
                    <a>
                      {
                        value < 3 &&
                        (
                          <img src="./img/station-icon2.png" onClick={()=>{
                           setchangestation(!changestation)
                          }}/>
                        )
                      }
                    </a>
                    </Tooltip>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="Station-head sub-head py-2 fs-13">
              <div className="d-flex gap-2 ps-2">
                <p
                  onClick={() => {
                    alert("Please check off Priority Box on Station");
                  }}
                >
                  <span>Priority</span> <span>+</span>
                </p>
                <p className="dropdown">
                  <span
                    onClick={() => {
                      setOption(!option);
                    }}
                  >
                    Options
                  </span>{" "}
                  <span>+</span>
                  {option && (
                    <div className="dropdown-body text-center">
                      <p className="fw-bold">Messaging options</p>
                      <div className="my-2 d-flex gap-4 justify-content-between">
                        <lable>Show only Session Messaging</lable>
                        <input type="checkbox" />
                      </div>
                      <div className="my-2 d-flex gap-4 justify-content-between">
                        <div>
                          <p>Add a Station</p>
                        </div>
                        <div>
                          <p
                            onClick={() => {
                              setForm(!form);
                            }}
                          >
                            +
                          </p>
                        </div>
                      </div>
                      <div className="my-2 d-flex gap-4 justify-content-between">
                        <div>
                          <p>Add Direct Session Message</p>
                        </div>
                        <div>
                          <p>
                            <AddNewSession />
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </p>
              </div>

              <div>
                <ul>
                  <li>
                    <a>
                      <img src="./img/substationicon1.png" onClick={widthadjust} />
                    </a>
                  </li>
                  <li>
                    <a>
                    <img src="./img/substationicon2.png"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}

             
            {/* <div className="pb-2 bg-white stationss">
              {MyStationData.map((sData) => {
                const { img1, img2, id, text, title } = sData;
                return (
                  <div key={id}>
                  <Card className="card">
                    <Row
                      className="px-3"
                      onMouseEnter={() => setIsShown(true)}
                      onMouseLeave={() => setIsShown(false)}
                    >
                      <Col className="px-1 my-1" md={width}>
                        <Card.Img variant="top" src={img1} />
                      </Col>
                      <Col className="px-1 my-1" md={width}>
                        <Card.Img variant="top" src={img1} />
                      </Col>
                      <Col className="px-1 my-1" md={width}>
                        <Card.Img variant="top" src={img1} />
                      </Col>
                      <Col className="px-1 my-1" md={width}>
                        <Card.Img variant="top" src={img1} />
                      </Col>
                    
                      
                    </Row>
                  </Card>
                  </div>
                );
              })}
            </div> */}




              <div>

                {
                  changestation?<MyStationp/>:<Huddle/>
                }
                 
              
              </div>

            
          </div>
        </Col>
      </Row>
      {
        datas.map((s)=>{
   return <div ></div>
        })
      }
    </Container>
  );
};

export default MyStation;
