import React from "react";
import ReactDOM from "react-dom/client"

// React.createElemet => React Element- JS Object => HTMLElement 

// const heading = React.createElement("h1",{id:"heading"},(
//     React.createElement("div",{},"hi")
// ))

//JSX is not HTML in JS . it is html like syntax.
// Transpiled before it reaches the JSX - Babel
//JSX => babel transpiles it to React.createElement => Reactelement-JS object => HTMLElement(Render)
const jsxHeading = (<h1 id="heading" className="heading">
    This is jsx
    </h1>)
console.log(jsxHeading)

const Title =()=>(
    <h1 className="head" tabIndex="5">
        JSX with tabindex
    </h1>
)
//class based component - old
//functional component - new

//React Functional Component - A function that return jsx or react element
// const HeadingComponent = () =>{
//     return <h1>Hi harsh</h1>
// }

// const HeadingComponent = () =><h1>Hi harsh</h1>
//jsx sanitize the data if any malicious data come from api

//Component composition mneans component inside component
const number =100
const HeadingComponent = () =>(
    <div id="container">
        {Title()}
        {jsxHeading}
        <h1>{number*100}</h1>
        <h1>Hi harsh</h1>
        <Title/>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent/>)