import { MapContainer, Marker, Popup } from "react-leaflet";
function AmenitiesSection() {
  return (
<div className=" hidden lg:block w-1/4">
<div className="  bg-white  m-2 rounded-lg  p-2 relative shadow-md ">
      <h2 className="text-grayPrimary-600 font-bold text-3xl mb-6">
        Amenities
      </h2>

      <ul className="flex flex-col mb-4">
        <AmenityItem />
        <AmenityItem />
        <AmenityItem />
        <AmenityItem />
        <AmenityItem />
      </ul>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <Marker position={[51.505, -0.09]}></Marker>
      </MapContainer>
      <div className="flex items-center ">
        <div className="flex items-center p-2">
          <span className="text-md font-bold md:text-lg">50.00 &nbsp;</span>
          <span className="text-sm text-[#85758A] md:text-lg">
            {" "}
            / &nbsp;night
          </span>
        </div>
        <button className="bg-redPrimary-500 font-bold md:text-lg p-1 md:p-2 text-white flex-1 rounded-lg">
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
    <li className="flex items-center mb-2">
      <div className="bg-redPrimary-500 w-2 h-2 rounded-full p-2 m-2"></div>
      <span className="text-grayPrimary-600 text-xl font-medium">
        Smoke Detector
      </span>
    </li>
  );
}
