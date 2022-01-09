import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Countries from './components/Countries'

const App = () => { 

  const [notes, setNotes] = useState([])
  const [newSearch, setNewSearch] = useState('')

  const countriestoshow = notes.filter(note => note.name.common.toLowerCase().includes(newSearch.toLowerCase()))
  // console.log(countriestoshow.length);
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setNotes(response.data)
      })
  }, [])

  console.log(countriestoshow);

  const searchByName = (e) => {
    setNewSearch(e.target.value)
  }

  // console.log(notes[0].name.common);
  return (
    <div>
      <Search searchByName={searchByName} />

      <Countries countriestoshow={countriestoshow} />

    </div>
  )
}


export default App