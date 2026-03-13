import { useState } from "react";
import "./Weather.css";
import axios from "axios";
import DisplayWeather from "./DisplayWeather";
import DisplayForecast from "./DisplayForecast";

export default function Weather() {
  const [isReady, setIsReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [cityQuery, setCityQuery] = useState("Perth");

  function handleResponse(response) {
    setWeatherData({
      city: response.data.city,
      country: response.data.country,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
    });
    setIsReady(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityQuery(event) {
    setCityQuery(event.target.value);
  }

  function search() {
    const apiKey = "04dbc8004716437tab5bc0bfo1baf277";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityQuery}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (isReady) {
    return (
      <div className="weather mt-5">
        <form className="search-element mb-4" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter city"
            className="search-input"
            autoFocus
            required
            onChange={handleCityQuery}
          />
          <input
            type="submit"
            value="Search"
            className="search-button btn btn-primary"
          />
        </form>
        <DisplayWeather data={weatherData} />
        <DisplayForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
