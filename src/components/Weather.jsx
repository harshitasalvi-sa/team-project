import { useState, useEffect } from 'react'
import './Weather.css'
import { FaMagnifyingGlass } from "react-icons/fa6";

const VITE_WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function Weather() {
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [weatherDetails, setWeatherDetails] = useState(undefined);
   const [error, setError] = useState("");

  useEffect(()=>{
    if (!selectedCity) return;

    setError("");

    fetch(`https://api.weatherapi.com/v1/current.json?key=${VITE_WEATHER_API_KEY}&q=${selectedCity}`)
    .then((res)=>res.json())
    .then((finalRes)=>{
      // console.log(finalRes);
      if(finalRes.error ){
        setWeatherDetails(undefined);
        setError("No city data found");
      }
      else{
        setWeatherDetails(finalRes);
      }
    })
    .catch(error => {
      console.error("API Error:", error);
      setWeatherDetails(undefined);
      setError("Something went wrong");
    })
    
    setCity('');
  }, [selectedCity])

  let handleSubmit = (e)=>{
    e.preventDefault();
    if(!city.trim()) return;
    setSelectedCity(city);
    setCity("");
  }

  return (
    <>
      <div className="screenDiv">
        <h1 className="title">Weather App</h1>

        <div className="bundle">
          <form onSubmit={handleSubmit} className="weather-form">
            <input
              className="weather-input"
              type="text"
              placeholder="Enter City Name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <button type="submit" className="search-btn">
              <FaMagnifyingGlass />
            </button>
          </form>

          <div className="mainDiv">
            {weatherDetails !== undefined ? (
              <>
                <p className="city-name">
                  {weatherDetails.location.name}, {weatherDetails.location.country}
                </p>

                <div className="center">
                  <img
                    src={weatherDetails.current.condition.icon}
                    alt="weather icon"
                    width="50"
                  />
                </div>

                <p className="weather-text">
                  {weatherDetails.current.condition.text}
                </p>

                <p className="weather-text">
                  Temperature : {weatherDetails.current.temp_c}℃
                </p>
              </>
            ) : (
              error
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Weather
