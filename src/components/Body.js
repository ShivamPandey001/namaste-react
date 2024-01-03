import RestuarantCard from "./RestuarantCard";
import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineStatus from "./OfflineStatus";
const Body = () => {
  const [listOfRes, setListOfRestuarant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);

    // const cardIndex = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants? 2 : (json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants ? 3 : null);
    // console.log(cardIndex);

    // setListOfRestuarant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    const cards = json?.data?.cards || [];
    const cardIndex = cards.findIndex(
      (card, index) =>
        index >= 2 &&
        index <= 10 &&
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log(cardIndex);

    if (cardIndex !== -1) {
      setListOfRestuarant(
        cards[cardIndex]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredRes(
        cards[cardIndex]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    }
  };

  console.log("renderrring body");
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);
  if (onlineStatus === false) return <OfflineStatus />;

  /**
   * it can also be done the below way:
   * - const arr = useState(resList);
   * - const listOfRes = arr[0];
   * - const setListOfRestuarant = arr[1];
   */
  return !listOfRes || listOfRes.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div>
      <div className="flex">
        <div className="m-4 p-4">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 bg-green-100 py-0.5 m-4 rounded-xl"
            onClick={() => {
              console.log(searchText);

              const filteredRestuarant = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(listOfRes);
              console.log("data " + filteredRestuarant);
              // setListOfRestuarant(filteredRestuarant);
              setFilteredRes(filteredRestuarant);
              console.log(filteredRestuarant);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4 m-4 flex items-center">
          <button
            className="px-4 bg-gray-100 py-0.5 rounded-xl"
            onClick={() => {
              const filteredRes = listOfRes.filter(
                (res) => res.info.avgRating > 4
              );
              console.log(filteredRes);
              setListOfRestuarant(filteredRes);
            }}
          >
            Top Rated Restuarants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap bg-yellow-100">
        {filteredRes.map((restuarant) => (
          <Link
            key={restuarant.info.id}
            to={"/restuarants/" + restuarant.info.id}
          >
            <RestuarantCard resData={restuarant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
