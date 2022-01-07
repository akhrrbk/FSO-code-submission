import React, { useState } from 'react'

const Title = ({name}) => <h2>{name}</h2>

const Anecdote = ({text, votesCount}) => {
  return (
    <div>
      <p>{text}</p>
      <p>{votesCount}</p>
    </div>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Votes = ({anecdotes, allVotes}) => {
  const mostvotescount = Math.max(...allVotes)
  const mostvoteindex = allVotes.indexOf(mostvotescount)
  const mostvotes = anecdotes[mostvoteindex]

  if(mostvotescount === 0){
    return (
      <p>no votes yet</p>
    )
  }
  return (
    <div>
      {mostvotes} has {mostvotescount} votes
    </div>
  )
}

const App = () => {
  const [selected, setSelected] = useState(0);
  const [allVotes, setAllVotes] = useState(Array(6).fill(0));
  
  const handleAnecdoteClick = () => {
    const randomnum = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomnum)
  }
  
  const handleVoteClick = () => {
    const newAllVotes = [...allVotes]
    newAllVotes[selected] += 1
    setAllVotes(newAllVotes)
  }
  
  return (
    <div>
      <Title name='Anecdote of the day' />
      <Anecdote text={anecdotes[selected]} votesCount={allVotes[selected]} />
      <Button onClick={handleVoteClick} text='vote' />
      <Button onClick={handleAnecdoteClick} text='next joke' />

      <Title name='Anecdote with most votes' />
      <Votes anecdotes={anecdotes} allVotes={allVotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
]

export default App