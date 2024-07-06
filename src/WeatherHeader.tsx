import * as React from "react";

import styled from "styled-components";
import Box from "./styles/Box";
import Map from "./Map";

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


