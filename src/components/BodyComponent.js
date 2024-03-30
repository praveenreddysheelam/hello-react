import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const BodyComponent =() => {
    const [listOfRestaurants,setlistOfRestaurants]=useState([]);
    const [filteredList,setfilteredList]=useState([]);
    const [searchText,setsearchText]=useState("");
    useEffect(()=>{
        fetchData();
    },[])
    const  fetchData = async () => {
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);   
    }
    const handleSearch =() =>{
        console.log("search");
        searchlist=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
        setfilteredList(searchlist);
    }
    console.log(searchText);

    if(listOfRestaurants?.length==0){
        return(
            <Shimmer />
        );
    }
    console.log(filteredList);
    return(
        <div className="body">
            <div className="flex">
                <div className="search">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>setsearchText(e.target.value)}></input>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={handleSearch}>Search </button>
                </div>
                <div className="filter">
                <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg" onClick={()=>{
                   const filtered=listOfRestaurants.filter((res)=>res.info.avgRating>4.3);
                   setfilteredList(filtered);
                }} >Top Rated Restaurants </button></div>
            </div>
            <div className="flex flex-wrap" >
               {
                filteredList.map((restaurant) => <Link to={"/restaurants/"+restaurant.info.id } key={restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>)
               }
            </div>
        </div>
    );

}
export default BodyComponent;
