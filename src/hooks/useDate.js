import { addDays } from "date-fns";
import { useState } from "react";

export default function useDate(){
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: "selection",
        },
      ]);
      return {date,setDate}
}