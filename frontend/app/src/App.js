import { useState } from 'react';
import './App.css';
import  { baseConfig } from './config'

function App() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState(0);
  
  function handleClick() {
    if (number1 && number2) {
      fetch(`${baseConfig.baseURL}/api/sum/${number1}/${number2}`, {
        method: 'GET'
      })
      .then((response) => response.json())
      .then((data) => {
        setTotal(data)
      })
      .catch((error => console.log(error)))
    }
  }

  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input
        placeholder='First Number'
        type='number'
        value={number1}
        onChange={(e) => setNumber1(+e.target.value)}
      />
      <input
        placeholder='Second Number'
        type='number'
        value={number2}
        onChange={(e) => setNumber2(+e.target.value)}
      />

      <button onClick={handleClick}>Add Two Numbers</button>
      <p>Total: {total || ''}</p>
    </div>
  );
}

export default App;
