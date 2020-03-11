import React, { useState, useEffect,  Component } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import EncodeBox from './components/EncodeBox';
import ResultBox from './components/ResultBox';
import { Container, Row, Col } from 'reactstrap';

class Main extends Component {
    

  render ()
  {
    return(
      <div>
      <Header />

      <Container>
        <Row>
          <Col >
          <Editor />
          </Col>
          <Col >
          <ResultBox />
          </Col>
          <Col >
          <EncodeBox />
          </Col>
        </Row>
      </Container>  

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

