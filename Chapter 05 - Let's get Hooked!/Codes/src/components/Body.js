import {RestaurantList} from "../config";
import RestaurantCard from "./RestaurantCard";
import {Img_Url} from "../config";
import { useState} from "react";


function filterData(searchInput, restaurantData){
    const filterData =  restaurantData.filter((restaurant)=>
        restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
    return filterData;
}

const Body = ()=>{
    const [restaurants, setRestaurants] = useState(RestaurantList);
    const [searchInput, setSearchInput] = useState();

   
    return(
        <>
            <div className = "search-conatiner">
                <input 
                type="text" 
                className="search-input" 
                placeholder="Search..." 
                value={searchInput}
                onChange={(e)=>{
                    setSearchInput(e.target.value);
                }}
                />
                <button 
                className="search-btn"
                onClick={()=>{
                   
                    const data = filterData(searchInput, restaurants );
                    setRestaurants(data);
                    
                }}
                >Search</button>
            </div>
            <div className="resraurant-list">{
                restaurants.map(restaurant =>{
                return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
            })
        }
        </div>
        </>
    )
};
export default Body;
