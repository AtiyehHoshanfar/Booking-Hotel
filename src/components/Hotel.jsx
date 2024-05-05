import { HiOutlineHeart } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { Rating } from "@mui/material";
import useWidth from "../hooks/useWidth";
import { Link } from "react-router-dom";
function Hotel({ hotel }) {
  const width = useWidth();
  const breakpointlg = 1000;
  return (
<Link to={hotel.id}>
<div className="bg-white rounded-xl p-2 relative mb-2 md:m-1 ">
      <img
        className="aspect-square bg-grayPrimary-200 w-full  rounded-lg"
        src={hotel.picture_url.url}
        alt=""
      />

      <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full absolute top-2 right-2">
        <HiOutlineHeart className="fill-redPrimary-500 text-lg" />
      </div>
      <div className="p-1">
        <h2 className="font-bold text-lg lg:text-2xl">
          {width > breakpointlg ? `${hotel.name.substr(1, 20)}...` : hotel.name}
        </h2>
        <h3 className="flex items-center text-[#85758A] md:text-xl ">
          <FaLocationDot />{" "}
          {`${hotel.host_location.split(",").splice(0, 2).join("").substr(1, 20)}...`}
        </h3>
        <div className="flex items-center justify-between my-3">
          <div className="flex items-center">
            <span className="text-md font-bold md:text-lg">
              ${hotel.price}.00 &nbsp;
            </span>
            <span className="text-sm text-[#85758A] md:text-lg">
              {" "}
              / &nbsp;night
            </span>
          </div>
          <div className="flex text-redPrimary-500 md:text-2xl">
            <Rating
              name="read-only"
              value={hotel.review_scores_rating}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
</Link>
  );
}
export default Hotel;
