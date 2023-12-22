import { CON_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#D3D3D3",
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
      <div className="res-card" style={styleCard}>
        <img
          className="res-logo"
          alt="res-logo"
          src={CON_URL+cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime} mins</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };

  export default RestuarantCard;