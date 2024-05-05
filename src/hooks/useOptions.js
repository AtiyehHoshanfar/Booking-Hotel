import { useState } from "react";
import { FaPerson, FaBaby, FaBed } from "react-icons/fa6";

export default function useOptions(){
    const [filterItems, setFilterItems] = useState([
        { type: "Adults", count: 1, minLength: 1, icon: "<FaPerson />"},
        { type: "Children", count: 1, minLength: 0, icon: "<FaBaby/> " },
        { type: "Rooms", count: 1, minLength: 1, icon:"< FaBed/>" },
    
      ]);
      const handleOperation = (type, operation) => {
        setFilterItems((prevItems) =>
          prevItems.map((filterItem) => {
            return filterItem.type === type && operation === "inc"
              ? { ...filterItem, count: filterItem.count++ }
              : filterItem.type === type && operation === "dec"
              ? {...filterItem,count:filterItem.count--}
              : filterItem;
          })
        );
      };
      return {filterItems,handleOperation}
}