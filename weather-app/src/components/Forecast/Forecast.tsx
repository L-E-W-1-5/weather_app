import React from 'react'



const Forecast = (props: any): JSX.Element => {
    

    //const temp = props.weatherData.main.temp
    
    console.log("this is props", props.weatherData)

    //const currentConditions = props.weatherData.main.current


    return (
        <>
            <ul>
                {/* <li>Temp: {temp}</li> */}
                <li>Current Conditions: {props.current}</li>
                <li>Wind:{props.wind}</li>
            </ul>    
        </>
    )
}


export default Forecast