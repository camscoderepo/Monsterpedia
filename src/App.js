import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData ] = useState(null);
  const fetchURL = 'https://mhw-db.com'
  const getData = () => 
  fetch(`${fetchURL}/monsters`)
  .then((res) => res.json())

  useEffect(() => {
    getData().then((data) => setData(data))
    }, [])
   
  return (
    <ul>
      {data?.map( item => (
        <li>
          <h3>{item.name}</h3>
          <h4>{item.species}</h4>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default App;
