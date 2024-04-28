import { HiOutlinePlusSm, HiMinusSm } from "react-icons/hi";

function Options({filterItems,onSetOperation}) {
  return (
    <div className="absolute top-1/2 right-1/2 translate-x-1/2 rounded-md w-4/5 bg-white -translate-y-1/2 p-4">
      <div className="mb-[6px]">
        {filterItems.map((filterItem) => {
          return <OptionItem key={filterItem.type} filterItem={filterItem} onSetOperation={onSetOperation}/>;
        })}
      </div>
      <button className="bg-redPrimary-500 w-full rounded-md p-1 text-white font-bold">
        Apply
      </button>
    </div>
  );
}

export default Options;

function OptionItem({ filterItem ,onSetOperation}) {
  return (
    <div className="flex items-center justify-between p-[6px]">
      <span>{filterItem.type}</span>
      <div className="flex items-center">
        <button className="bg-redPrimary-500 rounded text-white" onClick={()=>onSetOperation(filterItem.type,"inc")}>
          <HiOutlinePlusSm />
        </button>
        <span className="mx-[6px]">{filterItem.count}</span>
        <button disabled={filterItem.count<=filterItem.minLength} className="bg-redPrimary-500 rounded text-white" onClick={()=>onSetOperation(filterItem.type,"dec")}>
          <HiMinusSm />
        </button>
      </div>
    </div>
  );
}
