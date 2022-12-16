import React from 'react'
import './Forecast.css'
//import './Forecast.scss'



const Forecast = (props: any): JSX.Element => {
    
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

    console.log(props.weatherData)

    return (
    <body>
	    <div className="container">
		    <div className="weather-card">
			    <div className="image-section">
                <div className={currentSky === "sunny" ? "sunny" : currentSky === "raining" ? "rainy" : currentSky === "cloudy" ? "cloudy" : currentSky === "snowing" ? "snowy" : currentSky === "storms" ? "stormy" : "sunny"}></div>
				    <small className="type">{props.weatherData.sys.country}</small>
			    </div>
			    <div className="info-section">
				    <div className="wave"></div>
				    <div className="layer-1"></div>
				    <div className="layer-2"></div>
				    <div className="layer-3"></div>
				    <div className="contents">
                
                    <h1>{Math.floor(props.weatherData.main.temp - 273.15)}<span className="deg">&deg;</span></h1>
                
					    <span><h3>{props.weatherData.name}</h3><div className="weatherIcon"><i className={currentSky === "sunny" ? "wi wi-day-sunny" : currentSky === "raining" ? "wi wi-day-rain" : currentSky === "cloudy" ? "wi wi-day-cloudy" : currentSky === "snowing" ? "wi wi-day-snow" : "sunny"}></i></div></span>
				
					    <small>Current Conditions: {props.weatherData.weather[0]["description"]}</small>
				    </div>
			    </div>
		    </div>
        </div>    
    </body>
    )
}

export default Forecast