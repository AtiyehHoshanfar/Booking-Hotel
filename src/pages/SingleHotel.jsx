import { useParams } from "react-router-dom";
import AmenitiesSection from "../components/AmenitiesSection";
import HotelDetails from "../components/HotelDetails";
import useFetch from "../hooks/useFetch";



function SingleHotel() {
  const {id}=useParams()
  const { data, isLoading } = useFetch("http://localhost:3000/hotels");
  const selectedHotel = data.find((hotel) => hotel.id === id);

  if (isLoading || !data) {
    return <p>waiting...</p>;
  } 
  else  return (
    <div className="container mx-auto xl:flex">
      <HotelDetails selectedHotel={selectedHotel} />
      <AmenitiesSection  selectedHotel={selectedHotel}/>
    </div>
  );
}

export default SingleHotel;
