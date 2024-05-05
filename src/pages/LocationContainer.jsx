import LoacationList from "../components/LoacationList"
import Map from "../components/map/Map"
import useFetch from "../hooks/useFetch"


function LocationContainer() {
    const {data,isLoading}=useFetch("http://localhost:3000/hotels")
    if(isLoading) return <p> waiting ...</p>
  return (
<div className="p-2 ">
<div className="flex  ">
        <LoacationList locations={data}/>
        <Map locations={data}/>
      
    </div>
</div>
  )
}

export default LocationContainer
