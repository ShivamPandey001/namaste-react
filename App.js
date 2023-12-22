import React from "react"
import ReactDOM from "react-dom/client"
/**
 * Header
 * - LOGO
 * - NavBar
 * Body
 * - Search
 * - RestarantContainer
 * - RestuarantCard
 * Footer 
 * -CopyRight
 * -Links
 * -Address
 * -Contact
 */

const Header = () =>{
    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src="logo.png" alt="Logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>cart</li>
            </ul>
        </div>
    </div>
    );
}
const Applayout = () =>{
    return <div className="app"> 
        <Header />
    </div>;
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);