import { FaSearch } from "react-icons/fa";
import useOptions from "../hooks/useOptions";
import useDate from "../hooks/useDate";
import { format } from "date-fns";
import { Rating } from "@mui/material";
function LoacationList({ locations }) {
  return (
    <div className=" flex-1 ">
      <LoacationListNavbar />
<div className="max-h-full overflow-auto">
{locations.map((location) => (
        <Location key={location.id} locationData={location} />
      ))}
</div>
    </div>
  );
}

export default LoacationList;

function Location({ locationData }) {
  return (
    <div className="mr-2 mb-2 p-1 flex rounded-lg bg-white overflow-hidden">
      <img
        className="w-40 rounded-md aspect-square "
        src="./src/The infinity pool under the shade of a mango tree.webp"
        alt=""
      />
      <div className=" p-2 flex-1">
        <h2 className="text-2xl font-bold "> {locationData?.name}</h2>
        <h3 className="text-xl text-grayPrimary-400 mb-2">
          {locationData?.host_location}
        </h3>
        <ul className="flex flex-wrap mb-2 ">
          {locationData?.amenities.slice(0,5).map((amenity, index) => (
            <Amenity key={index} amenity={amenity} />
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          <div className="flex items-center ">
            <span className="text-md font-bold md:text-lg">$ {locationData?.price}.00 &nbsp;</span>
            <span className="text-sm text-[#85758A] md:text-lg">
              / &nbsp;night
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
function Amenity({ amenity }) {
  return (
    <li className="bg-grayPrimary-100 px-1 py-[0.5px] rounded-md text-grayPrimary-600 m-[2px]  ">
      {amenity}
    </li>
  );
}

function LoacationListNavbar() {
  const { filterItems } = useOptions();
  const { date } = useDate();
  return (
    <div className="mb-6 mr-2">
      <div className="flex items-center px-4 py-1 bg-white   rounded-md mb-2">
        <FaSearch className="fill-redPrimary-500" />
        <input
          type="search "
          className="bg-transparent p-1 placeholder:text-grayPrimary-400 outline-none border-0"
          placeholder="Search Something..."
        />
      </div>
      <div className="flex  gap-2">
        <div className="flex-1 flex bg-white p-3 rounded-md  justify-between">
          {filterItems.map((item) => (
            <Item key={item.type} item={item} />
          ))}
        </div>
        <div className="flex-1 flex items-center bg-white p-3 rounded-md  justify-around">
          <span>{format(date[0].startDate, "d MMMM ")}</span>
          <span>{format(date[0].endDate, "d MMMM ")}</span>
        </div>
      </div>
    </div>
  );
}

function Item({ item }) {
  return (
    <span className="relative">
      {item.count}
      {item.type}
    </span>
  );
}
