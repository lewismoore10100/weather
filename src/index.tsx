import { createRoot } from "react-dom/client";
import Clock from './Weather';
import * as React from "react";

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    const root = createRoot(rootElement);
    root.render(
        <Clock prefix={"blah"}/>
    );
})


