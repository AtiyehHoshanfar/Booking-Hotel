import { FaLocationDot, FaBed } from "react-icons/fa6";
import { FcHome } from "react-icons/fc";

function HotelDetails() {
  return (
    <div className="order-1   xl:w-3/4 lg:mx-auto xl:mx-0 relative flex flex-col p-2 lg:flex-row  ">
<div className=" w-full flex-1 lg:w-1/2">
<div className=" aspect-square bg-red-500 rounded-xl overflow-hidden ">
        <img
          src="/src/The infinity pool under the shade of a mango tree.webp"
          className="w-full"
          alt=""
        />
      </div>
</div>
      <div className="w-full flex-1">
        <div>
          <div className="shadow-md relative -top-10 bg-white md:bg-bgColor m-2 p-2 rounded-md lg:top-0 lg:shadow-none ">
            <h2 className="font-bold text-xl  lg:text-3xl">
              {/* {width > breakpointlg ? `${hotel.name.substr(1, 20)}...` : hotel.name} */}
              Nice room at Vondelpark
            </h2>
            <h3 className="flex items-center text-[#85758A]  md:text-2xl mb-2 xl:mb-6">
              <FaLocationDot />{" "}
              {/* {hotel.host_location.split(",").splice(0, 2).join("")} */}
              Amsterdam, North Holland
            </h3>
            <ul className="flex  overflow-x-auto justify-between lg:mb-6 ">
              <li className="flex lg:flex-col  md:p-2 lg:p-4 lg:rounded-md lg:text-xl md:justify-center items-center shadow-sm md:bg-white bg-grayPrimary-100 rounded-sm ">
                <span>
                  <FcHome />
                </span>
                <span className="p-2 ">Apartment</span>
              </li>
              <li className="flex lg:flex-col  md:p-2 lg:p-4 lg:rounded-md lg:text-xl lg:justify-center items-center shadow-sm md:bg-white bg-grayPrimary-100 rounded-sm">
                <span>
                  <FaBed />
                </span>
                <span className="p-2 ">2Bedroom </span>
              </li>
              <li className="flex lg:flex-col  md:p-2 lg:p-4 lg:rounded-md lg:text-xl lg:justify-center items-center shadow-sm md:bg-white  bg-grayPrimary-100 rounded-sm">
                <span className="w-4 h-2 bg-red-400"></span>
                <span className="p-2 ">Commode</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="m-2  p-2">
          <h3 className="font-bold text-3xl">Description</h3>
          <p className="text-sm  md:text-lg">
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
