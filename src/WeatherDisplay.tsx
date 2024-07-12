import * as React from "react";
import { LocationWeatherData } from "./types/WeatherDataTypes";
import Location from "./Location";


type WeatherProps =  {
    locationWeatherData: LocationWeatherData
}


export default (props: WeatherProps) => 
        <Location {...props.locationWeatherData}></Location>