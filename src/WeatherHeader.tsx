import * as React from "react";

export default (props: HeaderProps) => 
    <header>s</header>

type HeaderProps = {
    latitude:              number;
    longitude:             number;
    generationtime_ms:     number;
    utc_offset_seconds:    number;
    timezone:              string;
    timezone_abbreviation: string;
}