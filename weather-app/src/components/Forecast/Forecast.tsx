import React from 'react'
import './Forecast.css'



const Forecast = (props: any): JSX.Element => {
    

    //const temp = props.weatherData.main.temp
    
    console.log("this is props", props.weatherData)

    let currentSky = props.weatherData.weather[0]["description"]

    if (currentSky){
        if (currentSky.includes("cloud") || currentSky.includes("overcast")){
            currentSky = "cloudy"
        }
        else if(currentSky.includes("rain")){
            currentSky = "raining"
        }
        else if(currentSky.includes("clear") || currentSky.includes("sun")){
            currentSky = "sunny"
        }
        else if(currentSky.includes("snow") || currentSky.includes("sleet")){
            currentSky = "snowing"
        }
        else if(currentSky.includes("storm") || currentSky.includes("lightening") || currentSky.includes("heavy rain")){
            currentSky = "storms"
        }
    }

    //const currentConditions = props.weatherData.main.current


    return (
        <div className="forecast_Container">
            <div>
                <h3>{props.weatherData.name}</h3>
                <p>Temp: {props.weatherData.main.temp}</p>
                <p>Current Conditions: {props.weatherData.weather[0]["description"]}</p>
                <p>Wind Speed: {props.weatherData.wind.speed}</p>
            </div>    
            <div className={currentSky === "sunny" ? "sunny" : currentSky === "raining" ? "rainy" : currentSky === "cloudy" ? "cloudy" : currentSky === "snowing" ? "snowy" : currentSky === "storms" ? "stormy" : "sunny"}></div>
            
        </div>
    )
}

export default Forecast