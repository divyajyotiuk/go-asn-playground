import React, { useState, useEffect,  Component } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import EncodeBox from './components/EncodeBox';
import ResultBox from './components/ResultBox';
import { Container, Row, Col } from 'reactstrap';
import './components/styles/Containers.css'

class Main extends Component {
    

  render ()
  {
    return(
      <div>
      <Header />
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
    </div>
    )
    
  }
}

// function main(){
//   const [currentTime, setCurrentTime] = useState(0);

//   useEffect(() => {
//     fetch('/time').then(res => res.json()).then(data => {
//       setCurrentTime(data.time);
//     });
//   }, []);
// }

export default Main;

