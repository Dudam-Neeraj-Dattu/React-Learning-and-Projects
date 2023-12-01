import React from 'react'

export const Planets = (props) => {
    return (
        <div>
            {props.isGasPlanet ? 
                <h1>{props.name}</h1>

                :

                <h1>{}</h1>
            }
        </div>
    )
}

// export default Planets