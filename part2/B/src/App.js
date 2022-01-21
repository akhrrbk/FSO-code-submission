import React, {useState} from 'react'
import './App.css'
import SearchField from './components/SearchField'
import FormField from './components/FormField'
import PersonsField from './components/PersonsField'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const searchtoshow = persons.filter(q => q.name.toLocaleLowerCase().includes(newSearch.toLocaleLowerCase()))
  const addtoPhonebook = (e) => {
    e.preventDefault()
    
    if(persons.find(n => n.name === newPerson)){
      alert(`${newPerson} already exists in our database`)
    } else if(newPerson === '' || newNumber === ''){
      alert(`please fill in the form before submission!`)
      setNewPerson(`${newPerson}`)
      setNewNumber(`${newNumber}`)
    } else {
      const newsubmission = {
        name: newPerson,
        number: newNumber
      }
      
      setPersons(persons.concat(newsubmission))
      console.log(`${newNumber} has been assigned to ${newPerson}`);
      setNewPerson('')
      setNewNumber('')
    }
  }

  const handleInputOneChange = (e) => {
    e.preventDefault()
    setNewPerson(e.target.value)
  }
  const handleInputTwoChange = (e) => {
    e.preventDefault()
    setNewNumber(e.target.value)
  }
  const handleSearchInput = (e) => {
    setNewSearch(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchField handleSearchInput={handleSearchInput} />
      <h2>add new</h2>
      <FormField addtoPhonebook={addtoPhonebook} newPerson={newPerson} handleInputOneChange={handleInputOneChange} newNumber={newNumber} handleInputTwoChange={handleInputTwoChange} />
      
      <h2>Numbers</h2>
      <PersonsField searchtoshow={searchtoshow} />
      
    </div>
  )
}

export default App;
