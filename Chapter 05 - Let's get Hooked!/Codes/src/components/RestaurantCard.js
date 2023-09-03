import {Img_Url} from "../config";
const RestaurantCard =({cloudinaryImageId, name, locality, cuisines, avgRating, costForTwo})=>{

    return(
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} width={200} height={150}></img>
            <h1>{name}</h1>
            <h2>{locality}</h2>
            <h3>{cuisines.join(" , ")}</h3>
            <p style={avgRating > 3 ? {color:"green"}:{color:"red"} }>{avgRating}</p>
       </div>
    );
};

export default RestaurantCard;