import { CiWifiOn } from "react-icons/ci";
import { FaCat } from "react-icons/fa";
function PopularLocations({hotels}) {
    const popularHotels=hotels.filter(hotel=>hotel.review_scores_rating===100)
  return (
    <div className="bg-grayPrimary-200 ml-1 p-3 rounded-xl w-full">
      <h2 className="text-grayPrimary-600 mb-4 font-bold text-3xl px-3 ">Popular Locations </h2>
      <div className="flex flex-col ">
        {popularHotels.map(hotel=><PopularLocation key={hotel.id} hotel={hotel} />)}
      </div>
    </div>
  );
}

export default PopularLocations;

function PopularLocation({hotel}) {
  return (

      <div className="flex p-2 flex-col bg-white rounded-xl m-2  mb-1">
        <h2 className="text-2xl font-medium text-grayPrimary-600"></h2>
        <span className="text-lg mb-3 text-grayPrimary-500">{hotel.host_location.split(",").splice(0, 2).join("")}</span>
        <div className="flex items-center mb-2 flex-wrap">
          <div className="flex items-center m-1 border-2 px-2 py-1 rounded-lg ">
            <CiWifiOn className="mr-2" />
            <span>Internet</span>
          </div>
          <div className="flex items-center m-1 border-2 px-2 py-1 rounded-lg ">
            <FaCat  className="mr-2" />
            <span>Cat</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-grayPrimary-600 md:text-lg">${hotel.price}.00 </span>
          <span className="text-grayPrimary-400 md:text-lg"> / night</span>
        </div>
      </div>

  );
}
