import * as React from "react";

import styled from "styled-components";
import Box from "./Box";
import Map from "./Map";
import { Coordinate } from "./types/WeatherDataTypes";

type HeaderProps = {
    elevation: number;
} & Coordinate

export default (props: HeaderProps) => 
    <Box title="Location">
        <ul>
            <li>Latitude: {props.latitude}</li>
            <li>Longitude: {props.longitude}</li>
            <li>Elevation: {props.elevation}</li>
        </ul>
        <Map {...props}/>
    </Box>