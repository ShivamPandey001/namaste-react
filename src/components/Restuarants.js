import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const Restuarants = () => {
  // when my page loads, i have to fetch it from Swiggy's api, so using useEffect below
  useEffect(() => {
    fetchMenu();
  }, []);
  const [resInfo, setResInfo] = useState(null);
  // i'm desctucturing it ryt away, to resId
  const {resId} = useParams();
  const fetchMenu = async () => {
    const data = await fetch( MENU_API + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };

  if (resInfo === null) return <ShimmerUi />;

  // destructuring the data
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul className="res-menu">
        {itemCards.map((item) =>(
            <li key={item.card.info.id}>
               {item.card.info.name } - {" Rs."}{item.card.info.price/100} 
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Restuarants;
