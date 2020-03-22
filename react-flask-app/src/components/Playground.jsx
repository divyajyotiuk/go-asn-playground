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

var schema_editor = "",
  encode_editor = "",
  decode_editor = "";

class Editor extends Component {
  constructor(props) {
    super(props);
  }

  onChange = newValue => {
    if (this.props.flag === 1) {
      schema_editor = newValue;
    }
    if (this.props.flag === 2) {
      encode_editor = newValue;
    }
    if (this.props.flag === 3) {
      decode_editor = newValue;
    }
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

class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asn_schema: "",
      console_output: "",
      result_status: "No action performed"
    };
  }

  onCompileButtonClicked = async () => {
    await this.setState({
      asn_schema: schema_editor
    });

    let url = "http://localhost:5000/structures";
    let data = {};
    data["asn_text"] = this.state.asn_schema;

    fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.status === 200) {
          this.setState({
            result_status: "Compiled Successfully"
          });
        }
        if (response.status === 0) {
          this.setState({
            result_status: "Compile Failed"
          });
        }

        return response.json();
      })
      .then(res => {
        this.setState({
          console_output: res.output
        });
      })
      .catch(error => console.error("Error:", error));
  };

  onResetButtonClicked = () => {
    this.setState({
      console_output: "",
      result_status: "No action performed"
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
                    <Editor editorValue={this.state.asn_schema} flag={1} />
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
                </Card>
              </div>
            </Col>
            <Col sm="4">
              <Row>
                <Console result={this.state.console_output} />
              </Row>
              <Row>
                <ResultBox result={this.state.result_status} />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const EncodeBox = props => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const onEncodeButtonClicked = () => {};

  const onDecodeButtonClicked = () => {};

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
              <Editor flag={2} />
            </CardBody>
            <CardFooter>
              Encoding scheme
              <Button
                className="compile-btn"
                onClick={() => {
                  onEncodeButtonClicked();
                }}
              >
                Encode
              </Button>
            </CardFooter>
          </Card>
        </TabPane>
        <TabPane tabId="2">
          <Card>
            <CardBody>
              <Editor flag={3} />
            </CardBody>
            <CardFooter>
              Decoding scheme
              <Button
                className="compile-btn"
                onClick={() => {
                  onDecodeButtonClicked();
                }}
              >
                Decode
              </Button>
            </CardFooter>
          </Card>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Playground;
