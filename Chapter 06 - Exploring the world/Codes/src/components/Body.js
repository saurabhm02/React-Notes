import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";

function filterData(searchInput, restaurants){
    const filterData =  restaurants.filter((restaurant)=>
        restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
    return filterData;
}

const Body = ()=>{
    const [filteredRestaurants, setFilteredRestaurants]= useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState();
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() =>{
        getRestaurants(); // API Call 
    }, []);

    async function getRestaurants(){
        try{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.224020&lng=75.770798&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            async function checkJsonData(jsonData) {
                for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        
                  // initialize checkData for Swiggy Restaurant data
                  let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
                  // if checkData is not undefined then return it
                  if (checkData !== undefined) {
                    return checkData;
                  }
                }
              }
        
              // call the checkJsonData() function which return Swiggy Restaurant data
              const resData = await checkJsonData(json);
        
              // update the state variable restaurants with Swiggy API data
              setAllRestaurants(resData);
              setFilteredRestaurants(resData);
        } catch(e){
            console.log(e);
        }
    }

    const searchData = (searchInput, restaurants) => {
        if (searchInput !== "") {
          const filteredData = filterData(searchInput, restaurants);
          setFilteredRestaurants(filteredData);
          setErrorMessage("");
          if (filteredData?.length === 0) {
            setErrorMessage("No matches restaurant found");
          }
        } else {
          setErrorMessage("");
          setFilteredRestaurants(restaurants);
        }
      };

    if(!allRestaurants) return null;  // not render component (Early return)

    return(
        <>
            <div className = "search-container">
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
                   
                    const data = filterData(searchInput, allRestaurants );
                    setFilteredRestaurants(data);
                    
                }}
                >Search</button>
            </div>

            {errorMessage && <div className="error-container">{errorMessage}</div>}


            {allRestaurants?.length === 0 ? (
                <Shimmer />
                 ) : (
                <div className="restaurant-list">
                {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
                {filteredRestaurants.map((restaurant) => {
                    return (
                    <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
                    );
                })}
                </div>
            )}
        </>
    )
};
export default Body;
