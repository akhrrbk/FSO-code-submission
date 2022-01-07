import './App.css';
import React, {useState} from 'react'

const Statistics = ({good, bad, neutral}) => {
  if(good === 0 && bad === 0 && neutral === 0){
    return (
      <div>
      <h1>statistics</h1>
      <p>no feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {good+bad+neutral}</div>
      <div>average {(good-bad)/(good+bad+neutral)}</div>
      <div>positive {(good)/(good+bad+neutral)}</div>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newValue) => () => setGood(newValue)
  const setToNeutral = (newValue) => () => setNeutral(newValue)
  const setToBad = (newValue) => () => setBad(newValue)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={setToGood(good+1)} >Good</button>
      <button onClick={setToNeutral(neutral+1)} >Neutral</button>
      <button onClick={setToBad(bad+1)} >Bad</button>
      
      <Statistics good={good} bad={bad} neutral={neutral} />
      
    </div>
  )
}

export default App;
