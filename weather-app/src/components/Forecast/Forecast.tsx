import React from 'react'

type weather = {
    temp: string
    current: string
    wind: string
}

const Forecast = (props:weather):JSX.Element => {
  
    return (
        <>
            <ul>
                <li>Temperature: {props.temp}</li>
                <li>Current Conditions: {props.current}</li>
                <li>Wind: {props.wind}</li>
            </ul>    
        </>
    )
}


export default Forecast