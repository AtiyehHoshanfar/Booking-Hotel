import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import HotelContainer from "./components/HotelContainer";
function App() {
  return (
    <div className="bg-bgColor w-full">
      <Navbar />
      <HotelContainer/>
    </div>
  );
}

export default App;
