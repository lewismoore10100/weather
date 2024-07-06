import { createRoot } from "react-dom/client";
import Clock from './WeatherDisplay';
import * as React from "react";
import WeatherDisplay from "./WeatherDisplay";
import WeatherApp from "./WeatherApp";


document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    const root = createRoot(rootElement);
    root.render(<WeatherApp/>);
})


