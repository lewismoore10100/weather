import * as React from "react";
import { Coordinate } from "./types/WeatherDataTypes";

export default (prop: Coordinate) => {
    const url = `https://www.openstreetmap.org/export/embed.html?bbox=${prop.longitude}%2C${prop.latitude}%2C${prop.longitude}%2C${prop.latitude}&amp;layer=mapnik`

    return <iframe width="425" height="350" src={url}></iframe>
}