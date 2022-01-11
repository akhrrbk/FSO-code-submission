import React from "react";

const Onecountrytoshow = ({countriestoshow}) => {
    return (
        <div>
            <h2>{countriestoshow[0].name.common}</h2>
            <p>Capital City: {countriestoshow[0].capital}</p>
            <p>Population: {countriestoshow[0].population}</p>
            <h3>Languages section is not available for now</h3>
            {/* <ul>
                {countriestoshow[0].languages.map((axror) => { <li key={axror.name}>{axror.name}</li>})}
            </ul> */}
            <img src={countriestoshow[0].flags.png} alt="" />
        </div>
    )
}

export default Onecountrytoshow