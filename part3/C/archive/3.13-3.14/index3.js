require('dotenv').config()
const express = require('express')
const app = express()
const Note = require('./models/note')

app.use(express.static('build'))
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('home page :)')
})

app.get('/api/personss', (req, res) => {
    Note.find({}).then(notes => {
      res.json(notes)
    })
  })

app.post('/api/personss', (req, res) => {
    const body = req.body

    if(body.name === undefined){
        return res.status(400).json({error: 'content missing'})
    }

    const note = new Note({
        name: body.name,
        number: body.number,
        date: new Date(),
    })

    note.save().then(savedNote => {
        res.json(savedNote)
    })
})

app.get('/api/personss/:id', (req, res) => {
    Note.findById(req.params.id).then(note => {res.json(note)})
})

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})