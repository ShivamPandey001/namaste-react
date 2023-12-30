import RestuarantCard from "./RestuarantCard";
import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineStatus from "./OfflineStatus";
const Body = () => {
    const [listOfRes , setListOfRestuarant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRes, setFilteredRes] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.342956&lng=81.909677&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);

        const cardIndex = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants? 2 : (json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants ? 3 : null);
        console.log(cardIndex);


        setListOfRestuarant(json?.data?.cards[cardIndex]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRes(json?.data?.cards[cardIndex]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    console.log("renderrring body");
    const onlineStatus = useOnlineStatus();
    console.log(onlineStatus);
    if(onlineStatus === false) return <OfflineStatus />

    /**
     * it can also be done the below way:
     * - const arr = useState(resList);
     * - const listOfRes = arr[0];
     * - const setListOfRestuarant = arr[1];
     */
     return !listOfRes || listOfRes.length ===0 ? <ShimmerUi /> : (
      <div>
        <div className="filter">
            <div className="search">
                <input className="search-box" type="text" value = {searchText}
                    onChange={(e) =>{
                        setSearchText(e.target.value);
                    }}
                />
                <button className="searchBtn"
                    onClick={()=>
                    {
                        console.log(searchText);
                        
                        const filteredRestuarant = listOfRes.filter((res) => (
                           res.info.name.toLowerCase().includes(searchText.toLowerCase())));
                        console.log(listOfRes);
                        console.log("data " +filteredRestuarant);
                        // setListOfRestuarant(filteredRestuarant);
                        setFilteredRes(filteredRestuarant);
                        console.log(filteredRestuarant);
                    }
                    }
                >Search</button>
            </div>
          <button
            className="filter-btn"
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
        <div className="res-container">
          {filteredRes.map((restuarant) => (
            <Link key={restuarant.info.id} to={"/restuarants/"+restuarant.info.id}><RestuarantCard resData={restuarant} /> </Link>
          ))}
        </div>
      </div>
    );
  };

  export default Body;
