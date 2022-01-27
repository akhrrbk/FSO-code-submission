import React from 'react'

const OneCountry = ({searchtoshow}) => {
    if(searchtoshow.length === 1){
        searchtoshow = searchtoshow[0]
        console.log(searchtoshow.languages.length);


        return (
            <div>
                <h2>{searchtoshow.name.common}</h2>
                <p>capital: {searchtoshow.capital[0]}</p>
                <p>population: {searchtoshow.population}</p>
                <img src={searchtoshow.flags.png} alt="" />
            </div>
        )
    } else return (
        <div>

        </div>
    )
}

export default OneCountry