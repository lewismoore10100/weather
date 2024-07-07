import * as React from "react";
import { BorderedBox } from "./styles/boxes";
import { Heading2 } from "./styles/headings";


type BoxProps = {
    title: string
    children: React.ReactElement
}

export default (props: BoxProps) => 
    <BorderedBox>
        <Heading2>{props.title}</Heading2>
        {props.children}
    </BorderedBox>