import * as React from "react";
import {useEffect, useState} from "react";
import styled from "styled-components";
import { LocationWeatherData } from "./types/WeatherDataTypes";
import WeatherHeader from "./WeatherHeader";


type WeatherProps =  {
    locationWeatherData: LocationWeatherData
}


export default (props: WeatherProps) => 
        <WeatherHeader {...props.locationWeatherData}></WeatherHeader>