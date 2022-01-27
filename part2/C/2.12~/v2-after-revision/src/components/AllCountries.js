import React from 'react'

const AllCountries = ({searchtoshow}) => {
    if(searchtoshow.length > 1){
        return (
            <div>
                <ul>
                    {searchtoshow.map((c, index) => <li key={index}>{c.name.common}</li> )}
                </ul>
            </div>
        )
    } else return (
        <div>

        </div>
    )
}

export default AllCountries