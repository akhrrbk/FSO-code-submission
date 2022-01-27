import React from 'react'

const PersonsField = ({searchtoshow}) => {
    return (
        <div>
            <ul>
            {searchtoshow.map((p, i) => <li key={i}>{p.name} {p.number}</li> )}
      </ul>
        </div>
    )
}

export default PersonsField