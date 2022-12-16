import React from 'react'



const Forecast = (props: any): JSX.Element => {
    

    //const temp = props.weatherData.main.temp
    
    console.log("this is props", props.weatherData)

    const currentSky = props.weatherData.weather[0]["description"]

    //const currentConditions = props.weatherData.main.current


    return (
        <>
            <ul>
                <li>Temp: {props.weatherData.main.temp}</li>
                <li>Current Conditions: {props.weatherData.weather[0]["description"]}</li>
                <li>Wind Speed: {props.weatherData.wind.speed}</li>
            </ul>    
            <div className={currentSky === "sunny" ? "sunny" : currentSky === "raining" ? "rainy" : currentSky === "cloudy" ? "cloudy" : currentSky === "snowing" ? "snowy" : currentSky === "storms" ? "stormy" : "sunny"}></div>
            {/* <div className="rainy"></div>
            <div className="sunny"></div>
            <div className="cloudy"></div>
            <div className="stormy"></div>
            <div className="snowy"></div> */}
        </>
    )
}

export default Forecast