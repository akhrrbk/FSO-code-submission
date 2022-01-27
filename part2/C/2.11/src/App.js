import React, {useState, useEffect} from 'react'
import './App.css'
import SearchField from './components/SearchField'
import FormField from './components/FormField'
import PersonsField from './components/PersonsField'
import axios from 'axios'
function App() {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(res => {
      const persons = res.data
      setPersons(persons)
    })
  }, [])
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
