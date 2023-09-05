import {Img_Url} from "../config";
const RestaurantCard =({cloudinaryImageId, name, locality, 
        cuisines, sla, costForTwo,
        avgRating,})=>{

    return(
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} width={200} height={150}></img>
            <h3>{name}</h3>
            <h5>{cuisines.join(" , ")}</h5>
            <h5>{locality}</h5>
            <span>
                <h4 style={avgRating > 3 ? {color:"green"}:{color:"red"} }>{avgRating}</h4>
                <h4 className="star">⭐</h4>
            
                <h4>| </h4>
                <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
                <h4>| </h4>
                <h4>{costForTwo ?? '₹200 for two'}</h4>
             </span>
        </div>
    );
};

export default RestaurantCard;