import React from "react";
import { Card, CardBody, CardTitle, CardText, CardFooter } from "reactstrap";
import "./styles/Containers.css";

const ResultBox = props => {
  return (
    <div className="result-container">
      <Card>
        <CardBody>
          <CardTitle>Result</CardTitle>
          <CardText> Body </CardText>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default ResultBox;
