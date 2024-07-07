import * as React from "react";
import styled from "styled-components";
import { JsxElement } from "typescript";


type BoxProps = {
    title: string
    children: React.ReactElement
}

export default (props: BoxProps) => 
    <BorderedBox>
        <h2>{props.title}</h2>
        {props.children}
    </BorderedBox>


const BorderedBox = styled.div`
    padding: 1rem;
    border: 0.2em solid #000;
    border-radius: 2rem;
`