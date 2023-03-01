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
import StationFiles from "./StationFiles";
const MyStation = () => {
  const [show, setIsShown] = useState(false);
  const [option, setOption] = useState(false);
  const [form, setForm] = useState(false);
  const [width,setwidth]=useState(6)
  const [currentstation, currentStation] = useState(false);
  const [value, setValue] = useState(0);
  const [changestation , setchangestation]=useState(false);

  const [stationFile, setStationFile] = useState(false);  
 
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
        <Col md={8} >
          <RecentSessions />
        </Col>
        <Col md={4} className="ps-0">
      
          <div>
            <div className="Station-head">
              <div>
                <ul>
                  <li>
                     <Tooltip title="Station File">
                    <a>
                      <img src="./img/upload-white.png" onClick={()=>{
                        setchangestation(!changestation)
                        setStationFile(false)
                       }
                        
                        } />
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
              <div>{changestation?<p>Huddle</p>:<p>My Station</p>}</div>
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
                 
                    <a>
                    {
                  stationFile?<Tooltip title="Back to Huddle"><img src="./img/station-icon2.png" onClick={()=>{
                    setchangestation(false)
                    setStationFile(!stationFile)
                   }}/></Tooltip>:  <Tooltip title="Back to Station"><img src="./img/huddleicon.png" onClick={()=>{
                    setchangestation(false)
                    setStationFile(!stationFile)
                   }}/></Tooltip>
                }

                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
              <div>
              
              {
                !changestation && !stationFile
 && <Huddle />
              }

          {
            changestation &&<StationFiles/>
                
            }
            {
          stationFile &&<MyStationp/>
            }
           

               
             
   
              
              </div>
              

            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyStation;
