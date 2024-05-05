import { MapContainer, Marker } from "react-leaflet";
import "../AmenitiesSection/AmenitiesSection.css"
function AmenitiesSection({ selectedHotel }) {
  let center;
  if (selectedHotel) {
    center = [selectedHotel?.geolocation.lat, selectedHotel?.geolocation.lon];
  }

  return (
    <div className="w-full  xl:w-1/4">
      <div className=" bg-bgColor md:bg-white  md:m-2 rounded-lg  p-3 relative  md:shadow-md ">
        <h2 className="text-grayPrimary-600 p-3 font-bold text-3xl mb-2 xl:mb-4">
          Amenities
        </h2>

        <ul
          className="flex flex-row xl:flex-col mb-2 p-2  overflow-auto max-h-[30rem] "
        >
          {selectedHotel?.amenities.map((amenity, index) => (
            <AmenityItem key={index} amenity={amenity} />
          ))}
        </ul>
        <MapContainer className="amenity-map" center={center} zoom={13} scrollWheelZoom={true}>
          <Marker position={center}></Marker>
        </MapContainer>
        <div className="flex items-center p-3 bg-white xl:relative z-50 fixed bottom-0 right-0 w-full m-0">
          <div className="flex items-center ">
            <span className="text-md font-bold md:text-lg">
              {selectedHotel?.price}.00 &nbsp;
            </span>
            <span className="text-sm text-[#85758A] md:text-lg">
              {" "}
              / &nbsp;night
            </span>
          </div>
          <button className="bg-redPrimary-500 font-bold md:text-lg p-1 ml-4 md:p-2 text-white flex-1 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
export default AmenitiesSection; 
function AmenityItem({ amenity }) {
  return (
    <li className="bg flex items-center xl:mb-2 text-nowrap m-1 p-1 rounded-md xl:m-0 bg-white md:bg-transparent">
      <div className="bg-redPrimary-500 w-1 h-1 xl:w-2 xl:h-2  rounded-full p-1 m-2"></div>
      <span className="text-grayPrimary-600 text-base xl:text-xl  font-medium">
        {amenity}
      </span>
    </li>
  );
}
