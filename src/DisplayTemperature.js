import { useState } from "react";

export default function DisplayTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();

    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="display-temperature">
        <span className="temperature">{Math.round(props.metric)}</span>
        <span className="temperature-units">
          °C|
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.metric * 9) / 5 + 32;
    return (
      <span className="display-temperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="temperature-units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          |°F
        </span>
      </span>
    );
  }
}
