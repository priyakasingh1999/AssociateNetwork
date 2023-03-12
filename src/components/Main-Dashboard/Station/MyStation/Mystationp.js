import React, { useEffect, useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import "./MyStation.css";
import AddNewSession from "../RecentSessions/AddNewSession";
import Tooltip from "@mui/material/Tooltip";
import MyStationForm from "./MyStationForm";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import { Sessionform } from "../../../Context/Session";
import { allStationdata } from "../../../../Api/Station";
const MyStationp = ({ stationFile }) => {
  const [MyStationData, setMyStationData] = useState([]);
  const { sessionform, setsessionform } = useContext(Sessionform);
  const { modalShow, id } = sessionform;
  console.log(sessionform);

  const [show, setIsShown] = useState(false);
  const [option, setOption] = useState(false);
  const [form, setForm] = useState(false);
  const [width, setwidth] = useState(6);
  const [datas, setdatas] = useState([]);
  
  
  useEffect(() => {
allStationdata().then((data)=>{
  setMyStationData(data);
})
   
  }, [stationFile]);

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

      <div className="pb-2 bg-white stationss " style={{ display: "flex" }}>
        {MyStationData &&
          MyStationData.map((sData) => {
            console.log(sData);
            const { _id, stationname, image, id } = sData;
            return (
              <Col key={_id} md={width} className="">
                <div
                  className="w-100 h-100"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  <div className="my-1 w-100 h-100 station-img">
                    <Card.Img
                      variant="top"
                      src={`https://assoc.studiomyraa.com/public/uploads/images/${image}`}
                      onClick={() =>
                        setsessionform({
                          ...sessionStorage,
                          modalShow: true,
                          id: sData,
                        })
                      }
                    />
                    {/* <Typography>{stationname}</Typography> */}
                  </div>
                </div>
              </Col>
            );
          })}
      </div>
    </div>
  );
};

export default MyStationp;
