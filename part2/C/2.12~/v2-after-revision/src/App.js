import React, {useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'
import OneCountry from './components/OneCountry'
import AllCountries from './components/AllCountries'

function App() {

  const [countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState('')
  
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(res => {
      const countries = res.data
      console.log(countries);
      setCountries(countries)
    })
  }, [])

  const searchtoshow = countries.filter(q => q.name.common.toLocaleLowerCase().includes(newSearch.toLocaleLowerCase()))

  console.log(searchtoshow.length)

  const handleSearchInput = (e) => {
    setNewSearch(e.target.value)
  }
  

  return (
    <>
      <div>
        search by name
        <input type="text" value={newSearch} onChange={handleSearchInput} />
      </div>
      <div>
        <AllCountries searchtoshow={searchtoshow} />
        
      </div>
      <div>
        <OneCountry searchtoshow={searchtoshow} />
      </div>
    </>
  )
}

export default App;
