import { CON_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestuarantCard = (props) => {
    const { resData } = props;
    const {loggedInUser} = useContext(UserContext);
      const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
      } = resData.info;
      const {deliveryTime} = resData.info.sla;
      return (
      <div className="p-4 m-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200" >
        <img
          className="rounded-lg h-[200] w-[300]"
          alt="res-logo"
          src={CON_URL+cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime} mins</h4>
        <h4>{costForTwo}</h4>
        <h4>User: {loggedInUser}</h4>
      </div>
    );
  };

  export const withPromotedLabel = (RestuarantCard) =>{
    return (props) => {
      return(
      <div>
        {console.log("withPromotedLabel")}
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestuarantCard {...props}/>
      </div>
      );
    };
  };

  export default RestuarantCard;