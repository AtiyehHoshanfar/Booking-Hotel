import { useState } from "react";
import {
  FaLocationDot,
  FaMagnifyingGlass,
  FaRegCalendar,
} from "react-icons/fa6";
import useFetch from "../../hooks/useFetch";
import Modal from "../Modal";
import Options from "../Options";
import DateRanger from "../DateRanger";
import { format } from "date-fns";
import useOptions from "../../hooks/useOptions";
import useDate from "../../hooks/useDate";
export default function MobileNavbar() {
  const {date,setDate}=useDate()
  const [search, setSearch] = useState("");
  const {filterItems}=useOptions()
  const [OpenModalOption, setOpenModalOption] = useState(false);
  const [OpenModalDate, setOpenModalDate] = useState(false);
  const { data } = useFetch("http://localhost:3000/hotels", search);

  const handleSearch = () => {
    const foundHotel = data.filter((hotel) =>
      hotel.name.toLowerCase().includes(search.toLowerCase())
    );

  };
  const handleOptions = () => {
    setOpenModalOption((isOpen) => !isOpen);
  };
  const handleDate = () => {
    setOpenModalDate((isOpen) => !isOpen);
  };
  return (
    <div className="md:hidden">
      <div className="flex items-center mb-2 w-full">
        {/* SEARCH  */}
        <div className="flex items-center bg-white flex-1 rounded-lg p-2 shadow-sm">
          <FaLocationDot className="fill-red-500 " />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Something ..."
            className="pl-1 outline-0 border-0 bg-transparent w-full placeholder:text-sm"
          />
        </div>
        <button
          onClick={handleSearch}
          className="w-10 h-10 rounded-full  shadow-sm m-1 bg-redPrimary-500 flex items-center justify-center"
        >
          <FaMagnifyingGlass className=" text-white " />
        </button>
      </div>
      {/*  DATE AND OPTIONS */}
      <div className="bg-white rounded-xl grid grid-cols-2 gap-2 p-2 mb-2 ">
        <div
          onClick={handleDate}
          className="flex items-center p-2 bg-grayPrimary-100 rounded-lg"
        >
          <FaRegCalendar className="fill-redPrimary-500 text-xl" />
          <span className="ml-2 "> {format (date[0].startDate, 'do MMMM y')}</span>
        </div>
        <div
          onClick={handleDate}
          className="flex items-center p-2 bg-grayPrimary-100 rounded-lg"
        >
          <FaRegCalendar className="fill-redPrimary-500 text-xl" />
          <span className="ml-2 "> {format (date[0].endDate, 'do MMMM y')}</span>
        </div>
        <ul
          onClick={handleOptions}
          className="bg-grayPrimary-100 p-2 flex items-center justify-between rounded-lg col-start-1 col-end-3"
        >
          {filterItems.map((item) =>{return (
            <li key={item.type} className="pointer-events-none">
               {item.count} {item.type}
            </li>
          )})}
        </ul>
      </div>

      {OpenModalOption && (
        <Modal cb={setOpenModalOption}>
          <Options />
        </Modal>
      )}
      {OpenModalDate && (
        <Modal cb={setOpenModalDate}>
          <DateRanger date={date} setDate={setDate}/>
        </Modal>
      )}
    </div>
  );
}
