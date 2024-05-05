import { Route, Routes } from "react-router-dom";
import "./App.css";
import SingleHotel from "./pages/SingleHotel.jsx";
import FirstPage from "./pages/FirstPage.jsx";
import LocationContainer from "./pages/LocationContainer.jsx";
function App() {
  return (
    <div>

        <Routes>
          <Route path="/" element={<FirstPage/>}/>
          <Route path="/:id" element={<SingleHotel/>}/>
          <Route path="/locations" element={<LocationContainer/>}/>
        </Routes>
    </div>
  );
}

export default App;
