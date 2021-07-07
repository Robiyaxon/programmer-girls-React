import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import style from "./Help.module.css";
const Example = (name, url, urlName, url2, urlName2, key) => {
  return (
    <div>
      <Card style={{ border: "none" }}>
        <Accordion.Toggle style={{ padding: 1 + "rem" }} as={Card.Header} eventKey={key} >
          {name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={key}>
          <Card.Body style={{ padding: 0.5 + "rem", borderBottom: 2 + "px solid #bfbfbf", paddingLeft: 2 + "rem" }}>
            <NavLink activeStyle={{ color: "red", textDecoration: "none" }} className={style.Categoriya_Url} style={{ padding: 0, textDecoration: "none", color: "#8e8e8e" }} to={url}> {urlName} </NavLink>
          </Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey={key}>
          <Card.Body style={{ padding: 0.5 + "rem", borderBottom: 2 + "px solid #bfbfbf", paddingLeft: 2 + "rem" }}>
            <NavLink activeStyle={{ color: "red", textDecoration: "none" }} className={style.Categoriya_Url} style={{ padding: 0, textDecoration: "none", color: "#8e8e8e" }} to={url2}> {urlName2} </NavLink>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </div>
  );
}
export default Example;