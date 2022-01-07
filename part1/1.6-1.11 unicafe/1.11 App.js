import './App.css';
import React, {useState} from 'react'

const Title = (props) => <h1>{props.name}</h1>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>


const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>
        {text} {value}
      </td>
    </tr>
  )
}

const Statistics = ({clicks}) => {
  
  const total = clicks.good + clicks.neutral + clicks.bad
  const average = (clicks.good - clicks.bad) / total
  const positive = `${Math.floor(100* clicks.good / total)}%`

  if(total === 0){
    return (
      <div>no feedback given</div>
    )
  }

  return (
    <div> 
      <table>
        <tbody>
          <StatisticLine text='good' value={clicks.good} />
          <StatisticLine text='neutral' value={clicks.neutral} />
          <StatisticLine text='good' value={clicks.good} />
          <StatisticLine text='all' value={total} />
          <StatisticLine text='average' value={average} />
          <StatisticLine text='positive' value={positive} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {

  const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0 })

  const handleGoodClick = () => setClicks({...clicks, good: clicks.good + 1})
  const handleNeutralClick = () => setClicks({...clicks, neutral: clicks.neutral + 1})
  const handleBadClick = () => setClicks({...clicks, bad: clicks.bad + 1})

  return (
    <div>
      <Title name='give feedback' />
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />
      <Title name='statistics' />
      <Statistics clicks={clicks} />
            
    </div>
  )
}

export default App;
