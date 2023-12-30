import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";

const Restuarants = () => {
  
  // i'm desctucturing it ryt away, to resId
  const {resId} = useParams();
  const resInfo = useRestuarantMenu(resId);

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
