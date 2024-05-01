import { FaLocationDot, FaBed } from "react-icons/fa6";
import { FcHome } from "react-icons/fc";
import useWidth from "../hooks/useWidth";

function HotelDetails() {
  const width = useWidth();
  const breakpointlg = 1000;
  return (
    <div className="   lg:w-3/4 relative flex flex-col m-2 lg:flex-row">
      <div className=" w-full lg:w-1/2 aspect-video bg-red-500  rounded-md  "></div>
      <div className="w-full">
        <div className="shadow-md relative -top-10 bg-white m-2 p-2 rounded-md lg:top-0 lg:shadow-none ">
          <h2 className="font-bold text-lg lg:text-3xl">
            {/* {width > breakpointlg ? `${hotel.name.substr(1, 20)}...` : hotel.name} */}
            Nice room at Vondelpark
          </h2>
          <h3 className="flex items-center text-[#85758A] md:text-2xl lg:mb-6">
            <FaLocationDot />{" "}
            {/* {hotel.host_location.split(",").splice(0, 2).join("")} */}
            Amsterdam, North Holland
          </h3>
          <ul className="flex  overflow-x-auto md:justify-between mb-8 ">
            <li className="flex lg:flex-col lg:p-2 lg:rounded-md lg:justify-center items-center shadow-sm bg-grayPrimary-100 rounded-sm ">
              <span>
                <FcHome />
              </span>
              <span className="p-2">Apartment</span>
            </li>
            <li className="flex lg:flex-col lg:p-2 lg:rounded-md lg:justify-center items-center shadow-sm bg-grayPrimary-100 rounded-sm">
              <span>
                <FaBed />
              </span>
              <span className="p-2">2 Bedroom </span>
            </li>
            <li className="flex lg:flex-col lg:p-2 lg:rounded-md lg:justify-center items-center shadow-sm  bg-grayPrimary-100 rounded-sm">
              <span className="w-4 h-2 bg-red-400"></span>
              <span className="p-2">Commode</span>
            </li>
          </ul>
          <h3>Desciption</h3>
          <p className="text-lg">
            Nice and clean private bedroom near the city center, 15 minutes by
            bike to Central station, Leidseplein Several shops, bars,
            restaurants and transports five minutes from my place. Balcony,
            bath, towels, shampoo, shower, wifi, music lounge,
          </p>
        </div>
      </div>
    </div>
  );
}

export default HotelDetails;
