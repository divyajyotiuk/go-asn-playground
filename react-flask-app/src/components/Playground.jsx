import React, { Component, useState } from "react";
import AceEditor from "react-ace";
import "./styles/Editor.css";
import "./styles/Buttons.css";
import "./styles/Containers.css";
import { Card, CardBody, CardTitle, Button, CardFooter } from "reactstrap";
import ResultBox from "./ResultBox";
import Console from "./Console";
import { Container, Row, Col } from "reactstrap";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

var editor_value = null;

class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schema_output: ""
    };
  }

  onCompileButtonClicked = () => {
    this.setState({
      schema_output: editor_value
    });
  };

  onResetButtonClicked = () => {
    this.setState({
      schema_output: ""
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
                    <Editor editorValue={this.state.schema_output} />
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
                    <p style={{ marginTop: 20 }}>ASN.1 Schema</p>
                  </CardFooter>
                </Card>
              </div>
            </Col>

            <Col sm="4">
              <div className="encode-container">
                <Card>
                  <CardBody>
                    <EncodeBox />
                  </CardBody>
                  <CardFooter>
                    <p>BER Encoding and Decoding schemes</p>
                  </CardFooter>
                </Card>
              </div>
            </Col>
            <Col sm="4">
              <Row>
                <Console result={this.state.schema_output} />
              </Row>
              <Row>
                <ResultBox result={this.state.schema_result} />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

class Editor extends Component {
  onChange = newValue => {
    editor_value = newValue;
  };

  render() {
    return (
      <AceEditor
        onChange={this.onChange}
        name="ace-editor"
        width="100%"
        editorProps={{ $blockScrolling: true }}
        value={this.props.editorValue}
      />
    );
  }
}

const EncodeBox = props => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Encode
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Decode
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Card>
            <CardBody>
              <Editor />
            </CardBody>
            <CardFooter>
              <Button className="compile-btn">Encode</Button>
            </CardFooter>
          </Card>
        </TabPane>
        <TabPane tabId="2">
          <Card>
            <CardBody>
              <Editor />
            </CardBody>
            <CardFooter>
              <Button className="compile-btn">Decode</Button>
            </CardFooter>
          </Card>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Playground;
