import { MapContainer, Marker } from "react-leaflet";
function AmenitiesSection() {
  return (
    <div className="w-full  xl:w-1/4">
      <div className=" bg-bgColor md:bg-white  md:m-2 rounded-lg  p-3 relative  md:shadow-md ">
        <h2 className="text-grayPrimary-600 p-3 font-bold text-3xl mb-2 xl:mb-4">
          Amenities
        </h2>

        <ul className="flex flex-row xl:flex-col mb-4 overflow-x-auto ">
          <AmenityItem />
          <AmenityItem />
          <AmenityItem />
          <AmenityItem />
          <AmenityItem />
        </ul>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
          <Marker position={[51.505, -0.09]}></Marker>
        </MapContainer>
        <div className="flex items-center p-3 bg-white xl:relative z-50 fixed bottom-0 right-0 w-full m-0">
          <div className="flex items-center ">
            <span className="text-md font-bold md:text-lg">50.00 &nbsp;</span>
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
function AmenityItem() {
  return (
    <li className="bg flex items-center xl:mb-2 text-nowrap m-1 p-1 rounded-md xl:m-0 bg-white md:bg-transparent">
      <div className="bg-redPrimary-500 w-1 h-1 xl:w-2 xl:h-2  rounded-full p-2 m-2"></div>
      <span className="text-grayPrimary-600 text-base xl:text-xl  font-medium">
        Smoke Detector
      </span>
    </li>
  );
}
