import React, {Component} from 'react';
import AceEditor from 'react-ace';
import './styles/Editor.css';
import './styles/Buttons.css';
import { Card, CardBody,
    CardTitle, Button, CardFooter} from 'reactstrap';

class Editor extends Component {
    constructor() {
        super();
    }
    componentDidMount(){
    }

    onLoad(editor) {
        console.log("i've loaded", editor);
      }
    onChange(newValue) {
        console.log('change',newValue);
      }
      

    render(){
    return (
    <div className="editor-container">
        <Card>
        <CardBody>
          <CardTitle>Schema</CardTitle>
          <AceEditor
          onLoad={this.onLoad}
          onChange={this.onChange}
          name="ace-editor"
          width="100%"
          editorProps={{$blockScrolling: true}}   
          />
        </CardBody>
        <CardFooter >
            <Button className="reset-btn">Reset</Button>
          <Button className="compile-btn">Compile</Button>
          </CardFooter>
      </Card>           
     </div>
        );
    }
}


export default Editor;