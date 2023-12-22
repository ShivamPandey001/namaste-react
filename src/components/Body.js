import RestuarantCard from "./RestuarantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
      <div>
        <div className="Search">Search</div>
        <div className="res-container">
          {resList.map(restuarant => <RestuarantCard key={restuarant.info.id} resData={restuarant} />)}
        </div>
      </div>
    );
  };

  export default Body;
