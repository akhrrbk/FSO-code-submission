import './App.css';
import React, {useState} from 'react'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newValue) => () => {
    setGood(newValue)
  }
  const setToNeutral = (newValue) => () => {
    setNeutral(newValue)
  }
  const setToBad = (newValue) => () => {
    setBad(newValue)
  }

  return (
    <div>
      {/* <img src="https://fullstackopen.com/static/d4fe767d6d8eb46f1dd21334f5f9e46e/5a190/13e.png" alt="" /> */}
      <h1>give feedback</h1>
      <button onClick={setToGood(good+1)} >Good</button>
      <button onClick={setToNeutral(neutral+1)} >Neutral</button>
      <button onClick={setToBad(bad+1)} >Bad</button>
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
    </div>
  )
}

export default App;
