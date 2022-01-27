import React from 'react'

const FormField = (props) => {
    const {addtoPhonebook, newPerson, handleInputOneChange, newNumber, handleInputTwoChange} = props
    return (
        <div>
            <form onSubmit={addtoPhonebook} action="">
                <div>
                <input type="text" value={newPerson} onChange={handleInputOneChange} />
                </div>
                <div>
                <input type="text" value={newNumber} onChange={handleInputTwoChange} />
                </div>
                <button type='submit'>save</button>
            </form>
        </div>
    )
}

export default FormField