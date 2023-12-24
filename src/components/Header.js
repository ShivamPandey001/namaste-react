import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="Logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>cart</li>
            <button
              className="loginBtn"
              onClick={() => {
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                {console.log(btnName)}
              }}
            >
              {btnName}
            </button>
            {console.log(btnName)}
          </ul>
        </div>
      </div>
    );
  };

  export default Header;