import { useState } from "react";
import ItemList from "./ItemList";

const RestuarantCategory = ({ data, showItems, setShowItem }) => {
    // const [showItem, setShowItem] = useState(false);
    //  how to do the Accordian feature when we click?
    const handleClick = () =>{
        setShowItem();
    }

    return (  
      <div>
        {/* Header */}
        <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4">
          <div className="flex justify-between cursor-pointer " onClick={handleClick}>
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
          </div>

        {/**Accordion content goes here */}
        {showItems && <ItemList items={data.itemCards} />}

        </div>
      </div>
    );
  };
  
export default RestuarantCategory;