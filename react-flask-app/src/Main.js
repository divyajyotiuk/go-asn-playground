import React, { useState, useEffect, Component } from "react";
import Header from "./components/Header";
import Playground from "./components/Playground";
import "./components/styles/Containers.css";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Playground />
      </div>
    );
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
