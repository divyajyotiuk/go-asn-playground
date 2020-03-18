import React from "react";
import { Card, CardBody, CardTitle, CardText, CardFooter } from "reactstrap";
import "./styles/Containers.css";

const Console = props => {
  return (
    <div className="console-container">
      <Card>
        <CardBody>
          <CardTitle>Console</CardTitle>
          <div className="console-area">{props.result}</div>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default Console;
