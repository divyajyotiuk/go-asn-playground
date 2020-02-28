import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';

function Main() {
    
const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
      <div>
          <Header />
          <div>
            <Editor />
            </div>
        </div>
  );
}

export default Main;