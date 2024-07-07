import * as React from "react";
import styled from "styled-components";
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


const BorderedBox = styled.div`
    padding: 1rem;
    border: 0.2em solid #000;
    border-radius: 2rem;
`