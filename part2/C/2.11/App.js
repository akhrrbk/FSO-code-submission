import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => { 

  const [notes, setNotes] = useState([])
    // const [newNote, setNewNote] = useState('')
    // const [showAll, setShowAll] = useState(true)

    useEffect(() => {
    // console.log('effect is working')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        const mypersons = response.data
        // console.log(mypersons.map(axror => axror.name))
        console.log(mypersons);
        setNotes(response.data)
      })
  }, [])

  return (
    <div></div>
  )
}


export default App