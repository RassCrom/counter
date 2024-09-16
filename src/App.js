import { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);

  function handleClickPlus() {
    setCounter(counter + 1)
  }

  function handleClickMinus() {
    setCounter(counter - 1)
  }

  function handleClickReset() {
    setCounter(0)
  }

  return (
    <div className="App">
      <h2>Counter:</h2>
      <h1>{counter}</h1>
      <button onClick={handleClickMinus}>- Minus</button>
      <button onClick={handleClickPlus} >+ Plus</button>
      <button onClick={handleClickReset} >Reset to 0</button>
    </div>
  );
}

export default App;
