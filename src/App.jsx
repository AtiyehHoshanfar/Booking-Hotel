
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import HotelContainer from "./components/HotelContainer";
import SingleHotel from "./pages/SingleHotel.jsx";
function App() {
  return (
    <div>
      <div className="bg-bgColor w-full">
        <Navbar />
        <HotelContainer />
      </div>
      {/* <div>
        <SingleHotel />
      </div> */}
    </div>
  );
}

export default App;
