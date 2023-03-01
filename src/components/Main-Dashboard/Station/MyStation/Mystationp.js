import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import "./MyStation.css";
import MyStationData from "./MyStationData";
import AddNewSession from "../RecentSessions/AddNewSession";
import Tooltip from "@mui/material/Tooltip";
import MyStationForm from "./MyStationForm";

const MyStationp = () => {
  const [show, setIsShown] = useState(false);
  const [option, setOption] = useState(false);
  const [form, setForm] = useState(false);
  const [width, setwidth] = useState(6);
  const [datas, setdatas] = useState([]);

  let newObject = window.localStorage.getItem("myObject");
     let datastation= JSON.parse(newObject)
     useEffect(()=>{
      if(datas){
        setdatas([datastation])
      }
     },[])

    
    
  


  const widthadjust = () => {
    if (width === 6) {
      setwidth(3);
    } else {
      setwidth(6);
    }
    console.log(width);
  };
  return (
    <div>
     
      {form && <MyStationForm setForm={setForm} form={form} />}
      <div className="Station-head sub-head py-2 fs-13">
        <div className="d-flex gap-2 ps-2">
          <p
            onClick={() => {
              alert("Please check off Priority Box on Station");
            }}
          >
            <span>Priority</span> <span>+</span>
          </p>
          <div className="dropdown">
          <p>
            <span
              onClick={() => {
                setOption(!option);
              }}
            >
              Options
            </span>{" "}
            <span>+</span>
            </p>
            {option && (
              <div className="dropdown-body text-center">
                <p className="fw-bold">Messaging options</p>
                <div className="my-2 d-flex gap-4 justify-content-between">
                  <label>Show only Session Messaging</label>
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
          </div>
        </div>

        <div>
          <ul>
            <li>
              <Tooltip title="Reduced Size">
              
                  <img src="./img/substationicon1.png" onClick={widthadjust} />
              
              </Tooltip>
            </li>
            <li>
             
                <img src="./img/substationicon2.png" />
             
            </li>
          </ul>
        </div>
      </div>
     
      <div className="pb-2 bg-white stationss">
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
      </div>
    </div>
  );
};

export default MyStationp;
