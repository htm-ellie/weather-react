import FormattedDate from "./FormattedDate";
import DisplayTemperature from "./DisplayTemperature";

export default function DisplayWeather(props) {
  return (
    <div className="DisplayWeather">
      <div className="weather-content row">
        <div className="col-8 text-start">
          <img src={props.data.icon} alt={props.data.description} />
          <DisplayTemperature metric={props.data.temperature} />
          <span className="weather-details">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </span>
        </div>
        <div className="col-4 text-end">
          <div className="city">{props.data.city}</div>
          <div className="city-timestamp">
            <FormattedDate date={props.data.date} />
          </div>
          <div className="condition">{props.data.description}</div>
        </div>
      </div>
    </div>
  );
}
