import React from 'react'

const PersonsField = ({searchtoshow, deleteHandle, value}) => {
    return (
        <ul>
            {searchtoshow.map((p, i) => <li key={i}>
            {p.name} {p.number}
            <button value={p.id} type='delete' onClick={deleteHandle}>delete</button>
            </li> )}
        </ul>
    )
}

export default PersonsField