import { useState } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { FaPerson, FaBaby, FaBed } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { addDays } from "date-fns";

function Navbar() {
  const [filterItems, setFilterItems] = useState([
    { type: "Adults", count: 1, minLength: 1, icon: <FaPerson /> },
    { type: "Children", count: 1, minLength: 0, icon: <FaBaby /> },
    { type: "Rooms", count: 1, minLength: 1, icon: <FaBed /> },
  ]);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
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
  return (
    <div>
      <div className="p-2">
        <div className="flex items-center mb-2">
          <button className="bg-grayPrimary-200 flex items-center justify-center w-10 h-10 rounded-full md:w-16 md:h-16">
            <FaRegUser className="fill-grayPrimary-500 text-xl md:text-2xl" />
          </button>
          <h2 className="p-2 text-grayPrimary-600 font-bold text-lg md:text-3xl md:p-4">
            Hi Atiyeh How is it going?...
          </h2>
        </div>

        <MobileNavbar
          filterItems={filterItems}
          onSetOperation={handleOperation}
          date={date}
          setDate={setDate}
        />
        <DesktopNavbar filterItems={filterItems} />
      </div>
    </div>
  );
}

export default Navbar;
