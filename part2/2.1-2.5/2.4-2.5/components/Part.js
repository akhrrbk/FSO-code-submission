import React from "react"

const Part = ({part, exercises}) => {
    // console.log(`part '${part}' and exercises '${exercises}' from Part component `);
    return (
        <p>
            {part} {exercises}
        </p>    
    )
}

export default Part