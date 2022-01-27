import React, {useState, useEffect} from 'react'
import './App.css'
import SearchField from './components/SearchField'
import FormField from './components/FormField'
import PersonsField from './components/PersonsField'
import personsService from './services/persons'

function App() {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    personsService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])
  
  const searchtoshow = persons.filter(q => q.name.toLocaleLowerCase().includes(newSearch.toLocaleLowerCase()))

  const addtoPhonebook = (e) => {
    e.preventDefault()
    
    if(persons.find(n => n.name === newPerson)){
      // alert(`${newPerson} already exists in our database`)
      alert(`${newPerson} already exist in our database so we will update the phone number`)
      const personfromphonebook = persons.find(person => person.name === newPerson)
      const changedPerson = {...personfromphonebook, number: newNumber}
      const id = Number(changedPerson.id)

      personsService.update(id, changedPerson)
      .then(returnedPersons => {
        console.log(`an old number ${personfromphonebook.number} has been deleted from ${personfromphonebook.name}`);
        setPersons(persons.map(person => person.id !== returnedPersons.id ? person : returnedPersons))
        console.log(`a new number ${returnedPersons.number} has been assigned to ${returnedPersons.name}`);
        setNewPerson('')
        setNewNumber('')
      })

    } else if(newPerson === '' || newNumber === ''){
      alert(`please fill in the form before submission!`)
      setNewPerson(`${newPerson}`)
      setNewNumber(`${newNumber}`)
    } else {
      const newsubmission = {
        name: newPerson,
        number: newNumber
      }
      
      personsService.create(newsubmission)
      .then(newReturned => { 
        setPersons(persons.concat(newReturned))
        // console.log(`${newNumber} has been assigned to ${newPerson}`);
        console.log(`${newReturned.number} has been assigned to ${newReturned.name} in our database`);
        setNewPerson('')
        setNewNumber('')
       })
    }
  }

  const deleteHandle = (e) => {
    e.preventDefault()
    // console.log(e.target.value);

    const id = e.target.value
    personsService
    .remove(id)
    .then(afterRemoving => {
      setPersons(persons.filter(person => person.id !== Number(e.target.value)))
    })

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
      <PersonsField searchtoshow={searchtoshow} deleteHandle={deleteHandle} />
      
    </div>
  )
}

export default App;
