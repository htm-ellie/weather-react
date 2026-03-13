import "./DisplayForecast.css";
import axios from "axios";
import { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";

export default function DisplayForecast(props) {
  const [isReady, setIsReady] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setIsReady(false);
  }, [props.city]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setIsReady(true);
  }

  if (isReady) {
    return (
      <div className="DisplayForecast">
        <div className="row mt-3">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col">
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "04dbc8004716437tab5bc0bfo1baf277";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
