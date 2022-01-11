import React from "react";

const PersonForm = ({addNote, handleNameChange, newName, newNumber, handleNumberChange}) => {
    return (
        <div>
            <form onSubmit={addNote}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id='name' value={newName} onChange={handleNameChange}/>
                </div>
                
                <div>
                    <label htmlFor="number">Number</label>
                    <input id='number' value={newNumber} onChange={handleNumberChange}/>
                </div>
                
                <div>
                    <button type='submit'>Save</button>
                </div>
            </form>   
        </div>
    )
}

export default PersonForm