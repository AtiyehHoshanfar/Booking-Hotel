

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';

const DateRanger = ({date,setDate}) => {


  return (
    <div className=" right-1/2 mx-auto translate-x-1/2 top-1/2 absolute -translate-y-1/2">

      <DateRange
className=""
        onChange={(item) => setDate([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={true}
        months={1}
        rangeColors={["#BB0102"]}
        ranges={date}
      />
      
    </div>
  );
};

export default DateRanger;