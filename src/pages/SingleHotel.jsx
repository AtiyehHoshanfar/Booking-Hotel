import React from "react";
import AmenitiesSection from "../components/AmenitiesSection";
import HotelDetails from "../components/HotelDetails";

function SingleHotel() {
  return <div className="container mx-auto flex">
    <AmenitiesSection/>
    <HotelDetails/>
  </div>;
}

export default SingleHotel;
