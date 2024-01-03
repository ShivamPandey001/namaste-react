import { CON_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0",
};

const RestuarantCard = (props) => {
    const { resData } = props;
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
      </div>
    );
  };

  export default RestuarantCard;