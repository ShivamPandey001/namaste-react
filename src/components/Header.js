import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="w-24">
          <img className="logo" src={LOGO_URL} alt="Logo" />
        </div>
        <div class="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              Online Status : {onlineStatus ? "✅" : "🔴"}
            </li>
            <li className="px-2">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2">
              <Link to="about">About Us</Link>
            </li>
            <li className="px-2">
              <Link to="contact">Contact Us</Link>
            </li>
            <li className="px-2">
              <Link to="grocery">Grocery</Link>
            </li>
            <li className="px-2">
              <Link to="">cart</Link>
            </li>
            <button
              className="px-2"
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