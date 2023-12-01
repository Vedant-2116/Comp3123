import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css'; 

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = 'f002b8e4fabd114ca2364b387e14be92'; 
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=43.6532&lon=-79.3832&appid=${apiKey}`);
        setWeatherData(response.data);
        setDetails(response.data.current);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return (
      <div className="col">
        Loading...
      </div>
    );
  }

  const currentDate = new Date();
  const currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

  return (
    <div>
      <div className="section-center">
        <h1 className="head">WEATHER FORECAST APP</h1>
      </div>
      <div className="wrapper">
        <div className="weather">
          <div className="city">
            <h1>Toronto, ON, Canada</h1>
          </div>

          <div className="clearfix"></div>

          <div className="container">
            <div className="icon">
              <i className="fa fa-sun-o spin glow"></i>
              <i className="fa fa-cloud wind"></i>
              <i className="fa fa-cloud two"></i>
              {/* Use a dynamic image based on the weather condition */}
              {details && (
                <img
                  height={150}
                  width={200}
                  src={`https://openweathermap.org/img/wn/10d@2x.png`}
                  alt="Weather Icon"
                />
              )}
            </div>
            <div className="temp">
              <div className="current">
                {(details && (details.temp - 273.15).toFixed(2))}&deg;
              </div>
              <div className="main">
                <b>{details && details.weather[0].main}</b>
              </div>
              <div className="des">
                Description: {details && details.weather[0].description}
              </div>
            </div>
            <div className="clearfix"></div>

            <div className="left">
              <i className="fa fa-angle-left"></i>
            </div>

            <div className="date">
              <p>{currentDate.toISOString().split('T')[0]}</p>
            </div>
            <div className="time">
              <p>{currentTime}</p>
            </div>
            <div className="right">
              <i className="fa fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;


