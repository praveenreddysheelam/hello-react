import { CDN_URL } from "../utils/constant";
const RestaurantCard=(props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla}=resData?.info;
    return(
      <div className="m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      {/* Use a container with max width and overflow-x-auto to wrap cuisines */}
      <div className="max-w-full overflow-x-auto">
          <h4>{cuisines.join(", ")}</h4>
      </div>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
  </div>
    );
}
export default RestaurantCard; 