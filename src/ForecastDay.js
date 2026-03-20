export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function icon() {
    let iconUrl = props.data.condition.icon_url;
    return <img src={iconUrl} alt={props.data.condition.description}/>; 
    
  }

  function max() {
    let maxTemp = Math.round(props.data.temperature.maximum);
    return `${maxTemp}°`;
  }

  function min() {
    let minTemp = Math.round(props.data.temperature.minimum);
    return `${minTemp}°`;
  }
  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <div className="forecast-icon">{icon()}</div>
      <div className="forecast-temperatures">
        <span className="forecast-temperature-max me-1">{max()}</span>
        <span className="forecast-temperature-min">{min()}</span>
      </div>
    </div>
  );
}
