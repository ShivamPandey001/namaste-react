import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="Logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About Us</Link>
            </li>
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
            <li>
              <Link to="">cart</Link>
            </li>
            <button
              className="loginBtn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
                {
                  console.log(btnName);
                }
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