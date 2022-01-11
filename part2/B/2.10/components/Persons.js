import React from "react";
import Note from './Note'

const Persons = ({notestoshow}) => {
    return (
       <div>
           <ul>
                {notestoshow.map((note) => <Note key={note.id} note={note} /> )}
            </ul>
       </div> 
    )
}

export default Persons