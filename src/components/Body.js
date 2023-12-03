import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

import { useState } from "react";

const Body = () => {
  //local state variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter_btn"
          onClick={() => {
            filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}>
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
