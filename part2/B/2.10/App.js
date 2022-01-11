import React, {useState} from 'react'
import Title from './components/Title'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = (props) => {

  const [notes, setNotes] = useState(props.notes)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const notestoshow = notes.filter(note => note.name.toLowerCase().includes(newSearch.toLowerCase()))
  // console.log(notestoshow)

  const addNote = (e) => {
    e.preventDefault()
    // console.log('button clicked', e.target)

    var filtering = notes.filter((axror) => axror.name === newName)
    // console.log(filtering)

    if(filtering.length === 0){
      const newnoteobject = {
        name: newName,
        number: newNumber,
        id: notes.length + 1,
      }

      setNotes(notes.concat(newnoteobject))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} already exists in our database`)
    }

    
  }

  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    // console.log(e.target.value);
    setNewNumber(e.target.value)
  }

  const searchByName = (e) => {
    // console.log(e.target.value);
    setNewSearch(e.target.value)
  }

  return (
    <div>
      <Title text='Phonebook' />
      
      <Filter searchByName={searchByName} />

      <Title text='add a new' />
      
      <PersonForm addNote={addNote} handleNameChange={handleNameChange} newName={newName} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <Title text='Numbers' />

      <Persons notestoshow={notestoshow} />

    </div>
  )
}

export default App