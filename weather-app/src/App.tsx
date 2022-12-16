import React, {useState} from 'react';
import './App.css';
import Buttons from './components/Buttons/Buttons'
import Forecast from './components/Forecast/Forecast'

const key = 'a48e76099bbc0659bc5c71ffd7d4ffd4'


function App() {

  const [cityID, setCityID] = useState(null)
  const [weather, setWeather] = useState()
  const [searchVal, setSearchVal] = useState()

  async function getWeather() {
    await fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)
    //await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${cityID}&appid=${key}`)
    //await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${key}`)
    .then((resp) => { return resp.json() }) // Convert data to json
    .then((data) => { setWeather(data);
    })
    .catch(() => {
      // catch any errors
    });
    if(weather)
    console.log(weather)
    // console.log(cityID)
  }

  
  function handleChange(event: any) {
    let citySearch = event.target.value;
    console.log(citySearch)
    setSearchVal(citySearch);
  }

  async function handleClick() {
    async function getWeather() {
      await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchVal + '&appid=' + key)
      .then((resp) => { return resp.json() }) // Convert data to json
      .then((data) => { setWeather(data);
      })
      .catch(() => {
        // catch any errors
      });
      if(weather)
        console.log(weather)
        // console.log(cityID)
      }
  getWeather()
  }

  return (
    <div className="center">
    <div className="App">
      
      
        <Buttons setID={setCityID} getReq={getWeather} name={cityID}></Buttons>
        {weather && <Forecast weatherData={weather}></Forecast>}
        <div className="searchBar">
          <input className="searchInputBar" onChange={handleChange}></input>
          <button className="searchButton" onClick={handleClick}>Click to Search</button>
        </div>
       </div>
    </div>
  );
}

export default App;

