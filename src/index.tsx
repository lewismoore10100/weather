import { createRoot } from "react-dom/client";
import Clock from './WeatherDisplay';
import * as React from "react";
import WeatherDisplay from "./WeatherDisplay";
import weatherdata from "../test/data/weatherdata";

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    const root = createRoot(rootElement);
    root.render(
        <WeatherDisplay locationWeatherData={weatherdata}></WeatherDisplay>
    );
})


