import React, {Component} from 'react';
import { Card, CardBody,
    CardTitle, CardFooter} from 'reactstrap';
    import './styles/Containers.css'

    class ResultBox extends Component {
        render(){
            return(
                <div className="result-container">
      <Card>
        <CardBody>
          <CardTitle>Result</CardTitle>
        </CardBody>
        <CardFooter >
             
            </CardFooter>
      </Card>
      </div>
            );
        }
    }

  export default ResultBox;