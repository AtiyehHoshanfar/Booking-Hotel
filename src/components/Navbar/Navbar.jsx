
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { FaRegUser } from "react-icons/fa";


function Navbar() {
return (
    <div className="container mx-auto">
      <div className="p-2">
        <div className="flex items-center mb-2">
          <button className="bg-grayPrimary-200 flex items-center justify-center w-10 h-10 rounded-full md:w-16 md:h-16">
            <FaRegUser className="fill-grayPrimary-500 text-xl md:text-2xl" />
          </button>
          <h2 className="p-2 text-grayPrimary-600 font-bold text-lg md:text-3xl md:p-4">
            Hi Atiyeh How is it going?...
          </h2>
        </div>

        <MobileNavbar/>
        <DesktopNavbar />
      </div>
    </div>
  );
}

export default Navbar;
