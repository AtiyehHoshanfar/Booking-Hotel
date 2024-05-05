import { useParams } from "react-router-dom";
import AmenitiesSection from "../components/AmenitiesSection";
import HotelDetails from "../components/HotelDetails";



function SingleHotel() {
  const {id}=useParams()

  return (
    <div className="container mx-auto xl:flex">
      <HotelDetails  id={id} />
      <AmenitiesSection />
    </div>
  );
}

export default SingleHotel;
