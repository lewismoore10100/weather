import * as React from "react";

export default (props: HeaderProps) => 
    <header>
        <ul>
            <li>Latitude: {props.latitude}</li>
            <li>Longitude: {props.longitude}</li>
            <li>Elevation: {props.elevation}</li>
        </ul>
    </header>

type HeaderProps = {
    latitude:              number;
    longitude:             number;
    elevation:             number;
}