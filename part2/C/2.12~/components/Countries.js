import React from "react";
import Note from './Note'
import Onecountrytoshow from "./Onecountry";

const Countries = ({countriestoshow}) => {

    if(countriestoshow.length > 20  && countriestoshow.length !== 0){
        return (
            <div>
                <p>
                  too many matches. please be more specific
                </p>
            </div>
        )
    } else if(countriestoshow.length === 1){
        
        return <Onecountrytoshow countriestoshow={countriestoshow} />
    } else {
        return (
           <div>
               <ul>
                    {countriestoshow.map((note, i) => <Note key={i} note={note} /> )}
                </ul>
           </div> 
        )
    }
}

export default Countries