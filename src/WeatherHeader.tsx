import * as React from "react";
import { Coordinate } from "./types/WeatherDataTypes";
import styled from "styled-components";
import Box from "./styles/Box";

type HeaderProps = {
    latitude:              number;
    longitude:             number;
    elevation:             number;
}

export default (props: HeaderProps) => 
    <header>
        <Box>
            <ul>
                <li>Latitude: {props.latitude}</li>
                <li>Longitude: {props.longitude}</li>
                <li>Elevation: {props.elevation}</li>
            </ul>
            <Map {...props}/>
        </Box>
        
    </header>


const Map = (prop: Coordinate) => {
    const url = `https://www.openstreetmap.org/export/embed.html?bbox=${prop.longitude}%2C${prop.latitude}%2C${prop.longitude}%2C${prop.latitude}&amp;layer=mapnik`

    return <iframe width="425" height="350" src={url}></iframe>
}