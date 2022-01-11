const express = require('express')
const app = express()

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (req, res)=>{
    res.send('home page :)')
})

app.get('/api/persons/', (req, res)=>{
    res.json(persons)
})

app.get('/info/', (req, res)=>{
    const note = {
        length: persons.length,
        date: new Date(),
    }
    const data = `<div> <p>Phonebook has info of ${note.length}</p> <p>${note.date}</p> </div>`
    res.send(data)
})

app.get('/api/persons/:userid', (req, res)=>{
    const id = Number(req.params.userid) // lol it was passed as string first, so i kept getting an error
    // console.log(id);
    const person = persons.find(person => person.id === id)
    // console.log(person);
    if(person){
        res.json(person)
    } else {
        res.send('data does not exist')
    }
})

const PORT = 3003
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})