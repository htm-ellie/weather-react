import { useState } from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer className="mt-3">
          Coded by Ellie Litt and{" "}
          <a href="https://github.com/htm-ellie/weather-react" target="_blank">
            open-sourced on GitHub{" "}
          </a>
          , hosted on{" "}
          <a href="https://weather-react-ellie.netlify.app/" target="_blank">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
