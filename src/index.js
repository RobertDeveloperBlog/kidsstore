import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {MantineProvider} from "@mantine/core";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <MantineProvider withGlobalStyles={true} withNormalizeCSS={true}>
        <App />
    </MantineProvider>
    </BrowserRouter>
);

