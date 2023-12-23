import RestuarantCard from "./RestuarantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
    const [listOfRes , setListOfRestuarant] = useState(resList);

    useEffect(()=>{
        console.log("useEffect called");
    }, []);
    console.log("renderrring body");
    /**
     * it can also be done the below way:
     * - const arr = useState(resList);
     * - const listOfRes = arr[0];
     * - const setListOfRestuarant = arr[1];
     */
    return (
      <div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredRes = listOfRes.filter(
                (res) => res.info.avgRating > 4.5
              );
              console.log(filteredRes);
              setListOfRestuarant(filteredRes);
            }}
          >
            Top Rated Restuarants
          </button>
        </div>
        <div className="res-container">
          {listOfRes.map((restuarant) => (
            <RestuarantCard key={restuarant.info.id} resData={restuarant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;
