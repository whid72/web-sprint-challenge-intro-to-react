import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';

const App = () => {

  const [data1, setData1] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/1')
      .then((res) => {
        console.log(res);
      })
    }, []
  )

    return (
      <div className="App">
        <h1 className="Header">Characters</h1>
        <Character data={data1} />
      </div>
    );
  }

export default App;
