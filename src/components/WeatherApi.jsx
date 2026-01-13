import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import './weatherapi.css';
const WeatherApi = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [tempUnit, setTempUnit] = useState("C");
  const [error, setError] = useState("");
  // const [suggestions, setSuggestions] = useState([]);


  const handleSearch = (e) => {
    e.preventDefault();
    if (!city) return;
   


    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then((res) => {
        setWeather(res.data);
        setError("");
        console.log(res.data);
        let Temperature = (res.data.main.temp);
        Temperature = Math.round(Temperature - 273.15) + " °C";
        setTempUnit(Temperature);
      })
         .catch(() => {
      setWeather(null);
      setError("City not found ! Enter valid city name.");
    });
    setCity("");
  };


  // function handleSuggestions(input) {
  //   if (!window.google || !input) {
  //     setSuggestions([]);
  //     return;
  //   }

  //   const service = new window.google.maps.places.AutocompleteService();

  //   service.getPlacePredictions(
  //     { input },
  //     (predictions, status) => {
  //       if (status === window.google.maps.places.PlacesServiceStatus.OK) {
  //         const list = predictions.map(p => p.description);
  //         setSuggestions(list); 
  //       } else {
  //         setSuggestions([]);
  //       }
  //     }
  //   );
  // }




  return (
    <div className='main'>
      <div className="weather-container">
        <h2>Weather App</h2>

        <div className="search-box">
          <form onSubmit={(e) => handleSearch(e)}>

            <input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                handleSuggestions(e.target.value);
              }}
              minLength="3"

            />
            {/* {suggestions.length > 0 && (
              <ul className="suggestions">
                {suggestions.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setCity(item);
                      setSuggestions([]); // click ke baad hide
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )} */}

            <button type="submit" >Search</button>
          </form>
        </div>

<div className="weather-info">
  {error ? (
    <div className="weather-card error">
      <p>{error}</p>
    </div>
  ) : weather ? (
    <div className="weather-card">
      <p style={{ fontWeight: "bold" }}>City Name : {weather.name}</p>
      <p>Temperature: {tempUnit}</p>
      <p>Condition: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity} %</p>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  ) : (
    <div>Please Type The City Name To Find Weather</div>
  )}
</div>

      </div>
    </div>
  );
}

export default WeatherApi;
