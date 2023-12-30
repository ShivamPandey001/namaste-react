import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
 
const useRestuarantMenu = (resId)=>{
  // when my page loads, i have to fetch it from Swiggy's api, so using useEffect below
    useEffect(() => {
        fetchMenu();
      }, []);

    const [resInfo, setResInfo] = useState(null);
    const fetchMenu = async () => {

        const data = await fetch( MENU_API + resId);

        const json = await data.json();

        setResInfo(json?.data);
    };

    return resInfo;
}

export default useRestuarantMenu;