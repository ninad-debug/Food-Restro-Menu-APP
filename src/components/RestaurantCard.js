import { AiFillStar } from "react-icons/ai";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div
      data-testid="resCard"
      className="border-2 space-y-2 hover:shadow-xl w-56 rounded-md p-3 m-5 cursor-pointer">
      <img
        className="w-full"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h2 className="text-xl font-bold">{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <span className="bg-green-300 w-fit p-1 text-sm font-semibold rounded-lg flex items-center">
        <AiFillStar className="star mr-1" /> {avgRating} starts
      </span>
    </div>
  );
};

//Higher order component

//input - RestaurantCard => RestaurantCardDiscount

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Discount
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
