import ShimmerUi from "./ShimmerUi";
import { useParams, useSearchParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import RestuarantCategory from "./RestuarantCategory";
import { useState } from "react";

const Restuarants = () => {
  
  // i'm desctucturing it ryt away, to resId
  const {resId} = useParams();
  const resInfo = useRestuarantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <ShimmerUi />;

  // destructuring the data
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( c => c.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
    return (
      <div className="text-center my-6 text-2xl">
        <h1 className="font-bold">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        {/**Category Accordian */}
        {categories.map((category,index) => (
          <RestuarantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems = {index === showIndex ? true : false}
            setShowItem = {()=>{setShowIndex(index)}}
          />
        ))}
      </div>
    );
};

export default Restuarants;
