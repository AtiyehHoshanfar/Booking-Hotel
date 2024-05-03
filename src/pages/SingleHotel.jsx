import AmenitiesSection from "../components/AmenitiesSection";
import HotelDetails from "../components/HotelDetails";

function SingleHotel() {
  return (
    <div className="container mx-auto xl:flex">
      <HotelDetails />
      <AmenitiesSection />
    </div>
  );
}

export default SingleHotel;
