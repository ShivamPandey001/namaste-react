import React from "react"
import ReactDOM from "react-dom/client"

//React Elements
// const jsxHeading = (<h1 id="heading" tabIndex="5">
//     Namaste React using JSX</h1>);


// React Component -> it should be in CapitalLetter

const Title = () =>(
    <h2>HungerHub</h2>
);

const title =(
    <h1 className="head">React Element</h1>
);
const age=25;
const HeadingComponent = () =>(
    <div id="container">
        <Title />
        <h2>{age+10}</h2>
        {title}
        {console.log("you can write any js code here")}
        <h1 className="heading"> HungerHub! Functional Components</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);