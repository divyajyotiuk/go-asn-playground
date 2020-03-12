import React from "react";
import { Card, CardBody, CardTitle, CardText, CardFooter } from "reactstrap";
import "./styles/Containers.css";

const Console = props => {
  return (
    <div className="console-container">
      <Card
        body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}
      >
        <CardBody>
          <CardTitle>Console</CardTitle>
          <CardText> {props.result} </CardText>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default Console;
