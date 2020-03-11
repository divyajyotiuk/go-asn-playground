import React, {Component} from 'react';
import Editor from './Editor';
import EncodeBox from './EncodeBox';
import ResultBox from './ResultBox';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardBody,
    CardTitle, Button, CardFooter} from 'reactstrap';

class Playground extends Component {

    constructor(props) {
        super(props);
        this.state = {result : ''};
    }

    render() {
        return(
            <div className="page-container">
                <Container fluid={true} width="100%">
                    <Row>
                        <Col sm="4">
                            <Editor />
                        </Col >
                        <Col sm="4">
                            <ResultBox />
                        </Col>
                        <Col sm="4">
                            <EncodeBox />
                        </Col>
                    </Row>
                </Container>  
            </div>
        );
    }
}

export default Playground;