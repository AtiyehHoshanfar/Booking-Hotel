import { useState } from "react";
import { FaLocationDot, FaCaretUp, FaCaretDown } from "react-icons/fa6";
import useOptions from "../../hooks/useOptions";

export default function DesktopNavbar() {
  const [search, setSearch] = useState("");
 const {filterItems,handleOperation}=useOptions()
  return (
    <div className="hidden md:block">
      <div className="flex items-center md:w-2/3 lg:w-2/5">
        <div className="border-2 rounded-[10px] flex items-center flex-1 overflow-hidden border-grayPrimary-300">
          <button className="fill-grayPrimary-200 p-3">
            <FaLocationDot className="fill-grayPrimary-500 text-2xl " />
          </button>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="p-3 w-full outline-0"
            placeholder="San Francisco , Stockton Street "
          />
        </div>
        <button className="bg-redPrimary-500 p-3 m-2 rounded-[10px] font-bold text-white ">
          Find Hotel
        </button>
      </div>
      <div className="flex items-center">
        <span className="m-2">Filter by Search :</span>
        {filterItems.map((item) => (
          <FilterItem key={item.type} item={item}>
            <div className="flex flex-col p-2">
              <button onClick={()=>handleOperation(item.type,"inc")}>
                <FaCaretUp className="text-2xl -mb-3 fill-redPrimary-500 " />
              </button>
              <button disabled={item.count<=item.minLength} onClick={()=>handleOperation(item.type,"dec")}>
                {" "}
                <FaCaretDown className="text-2xl fill-redPrimary-500" />
              </button>
            </div>
          </FilterItem>
        ))}
      </div>
    </div>
  );
}

function FilterItem({ item, children }) {
  return (
    <div className="rounded-full m-1 bg-white flex p-[2px] items-center">
      <div className="bg-redPrimary-100 rounded-full w-14 h-14 flex items-center justify-center ">
        <div className="text-2xl text-redPrimary-500">{}</div>
      </div>
      <span className="p-2">
        {item.type} - {item.count}
      </span>
      {children}
    </div>
  );
}
