import useFetch from "../hooks/useFetch";
import PopularLocations from "./PopularLocation";
import Hotel from "./Hotel";

function HotelContainer() {
  const { data, isLoading } = useFetch("http://localhost:3000/hotels");
  return (
    <div className="flex p-2 container mx-auto -z-50 ">
      <div className="  grid grid-cols-auto-fit-100  w-full md:m-0 lg:w-8/12">
        {isLoading
          ?<p>waiting...</p>
          : data.map((hotel) => <Hotel key={hotel.id} hotel={hotel} />)}
      </div>
      <div className="w-1/3 hidden lg:block">
      <PopularLocations hotels={data} />
      </div>
    </div>
  );
}

export default HotelContainer;

