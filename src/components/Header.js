import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // to read the data from UserContext we used a hook, called useContext, and pass which Context you want to use
  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="w-24">
          <img className="logo" src={LOGO_URL} alt="Logo" />
        </div>
        <div className="flex items-center">
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
            
            <li>
            {loggedInUser}
            </li>
                
          </ul>
        </div>
      </div>
    );
  };

  export default Header;