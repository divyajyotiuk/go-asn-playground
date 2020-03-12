import React, { Component } from "react";
import AceEditor from "react-ace";
import "./styles/Editor.css";
import "./styles/Buttons.css";
import "./styles/Containers.css";
import { Card, CardBody, CardTitle, Button, CardFooter } from "reactstrap";
import EncodeBox from "./EncodeBox";
import ResultBox from "./ResultBox";
import Console from "./Console";
import { Container, Row, Col } from "reactstrap";

var value = "";

class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = { result: "" };
  }
  componentDidMount() {}

  onLoad(editor) {
    console.log("i've loaded", editor);
  }
  onChange = newValue => {
    console.log("change ", newValue);
    value = newValue;
  };

  onCompileButtonClicked = () => {
    console.log("compile");
    this.setState({
      result: value
    });
  };

  onResetButtonClicked = () => {
    console.log("reset");
    this.setState({
      result: ""
    });
  };

  render() {
    return (
      <div className="page-container">
        <Container fluid={true} width="100%">
          <Row>
            <Col sm="4">
              <div className="editor-container">
                <Card>
                  <CardBody>
                    <CardTitle>Schema</CardTitle>
                    <AceEditor
                      onLoad={this.onLoad}
                      onChange={this.onChange}
                      name="ace-editor"
                      width="100%"
                      editorProps={{ $blockScrolling: true }}
                      value={this.state.result}
                    />
                  </CardBody>
                  <CardFooter>
                    <Button
                      className="reset-btn"
                      onClick={this.onResetButtonClicked}
                    >
                      Reset
                    </Button>
                    <Button
                      className="compile-btn"
                      onClick={this.onCompileButtonClicked}
                    >
                      Compile
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </Col>
            <Col sm="4">
              <EncodeBox />
            </Col>
            <Col sm="4">
              <Row>
                <Console result={this.state.result} />
              </Row>
              <Row>
                <ResultBox result={this.state.result} />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Playground;
