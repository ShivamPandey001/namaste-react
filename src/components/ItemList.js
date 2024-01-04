import { CON_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-gray-200 border-b-2	text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 text-base">
              <span>{item.card.info.name}</span>
              <span>- ₹: {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
              <div className="absolute">
          <button className="p-2 bg-white shadow-lg mx-16 my-18 rounded">Add +</button>
          </div>
          <img src={CON_URL + item.card.info.imageId} className="w-full" />
          </div> 
        </div>
      ))}
    </div>
  );
};

export default ItemList;
