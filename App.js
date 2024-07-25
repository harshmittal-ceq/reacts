import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement("div",{id:"child"},[
            React.createElement("h1",{},"hi this is hars"),
            React.createElement("h2",{},"h2")
        ]),
        React.createElement("div",{id:"child"},[
            React.createElement("h1",{},"hi"),
            React.createElement("h2",{},"h2")
        ])
    ]
)

const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Hello World from React!"
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent);