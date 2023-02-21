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

const MyStation = () => {
  const [show, setIsShown] = useState(false);
  const [option, setOption] = useState(false);
  const [form, setForm] = useState(false);

  return (
    <Container className="my-3">
      {form && <MyStationForm setForm={setForm} form={form} />}
      <Row>
        <Col xs={8}>
          <RecentSessions />
        </Col>
        <Col xs={4}>
          <div className="Station-head">
            <div>
              <ul>
                <li>
                  <a>
                    <img src="./img/upload-white.png" />
                  </a>
                </li>
                <li>
                  <a>
                    <img src="./img/mystation2-white.png" />
                  </a>
                </li>
              </ul>
            </div>
            <div>My Station</div>
            <div>
              <ul>
                <li>
                  <a>
                    <img src="./img/station-icon2.png" />
                  </a>
                </li>
                <li>
                  <a>
                    <img src="./img/station-icon3.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="Station-head sub-head py-2 fs-13">
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
                    <img src="./img/substationicon1.png" />
                  </a>
                </li>
                <li>
                  <a>
                    <img src="./img/substationicon2.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pb-2 bg-white">
            {MyStationData.map((sData) => {
              const { img1, img2, id, text, title } = sData;
              return (
                <Card key={id} className="card">
                  <Row
                    className="p-2 py-1"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                  >
                    <Col className="pe-1" sx={6}>
                      <Card.Img variant="top" src={img1} />
                    </Col>
                    <Col className="ps-1" sx={6}>
                      <Card.Img variant="top" src={img2} />
                    </Col>
                  </Row>

                  {/* {show  && <Card.Body >
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>
                        {text}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                } */}
                </Card>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyStation;
