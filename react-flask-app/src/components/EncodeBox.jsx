import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardText, CardFooter } from "reactstrap";
import "./styles/Containers.css";

const EncodeBox = props => {
  return (
    <div className="encode-container">
      <Card>
        <CardBody>
          <CardTitle>Encoding</CardTitle>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default EncodeBox;
