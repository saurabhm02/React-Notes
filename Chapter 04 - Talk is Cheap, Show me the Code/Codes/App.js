import React from "react";
import ReactDOM from "react-dom/client";

const Logo=()=>{
    return(
        <a href="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1K5SmH1zdNmaaNYcLI3h_zmLdrAmvsqrrOVShEoJ4MGEErRkr5zgWgfp2P2Lh-1uMyuk&usqp=CAU" alt="user-icon" className="icon" width={100} height={50}/>
        </a>
    )
};

const Header=()=>{
    
    return(
        <div className="header">
            <Logo/>
            <div className="header-items">
                <span>Home</span>
                <span>About</span>
                <span>Contact Us</span>
            </div>
        </div>
    )
};

const RestaurantList = [
    {
        type: "Restaurant",
        info: {
          id: "1",
          name: "Vaishno Dhaba",
          cloudinaryImageId: "grgrtizch88dzwmhhxbw",
          locality: "Phagwara Locality",
          areaName: "Deep Nagar",
          costForTwo: "₹300 for two",
          avgRating: 4.3,
          cuisines: [
            "North Indian",
            "Snacks",
          ]   
        }
    },
    {
        type: "Restaurant",
        info: {
          id: "302514",
          name: "Oven Xpress",
          cloudinaryImageId: "cqcfwycng3echmhw6jfg",
          locality: "Defence Colony",
          areaName: "Jalandhar Cantt",
          costForTwo: "₹250 for two",
          avgRating: 4.1,  
          cuisines: [
            "North Indian",
            "Chinese",
          ]
        }
    },
    {
        type: "Restaurant",
        info: {
          id: "490968",
          name: "Kwality Walls",
          cloudinaryImageId: "morwxnw9pwfm3c6vkbba",
          locality: "Udham Singh Nagar",
          areaName: "Phagwara Law Gate",
          costForTwo: "₹200 for two",
          avgRating: 4.5,
          cuisines: [
            "Desserts",
            "Ice Cream"
          ],
        }
    },
    {
        type: "Restaurant",
        info: {
          id: "249748",
          name: "McDonald's",
          cloudinaryImageId: "08eee882fda81b68e5c36e3a5d89d8c0",
          locality: "Jalandhar Kotakalan",
          areaName: "Kukar Pind",
          costForTwo: "₹400 for two",
          avgRating: 4.2,
          cuisines: [
            "American"
          ],
        }
    },
    {
        type: "Restaurant",
        info: {
          id: "171100",
          name: "KFC",
          cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
          locality: "Paragpur",
          areaName: "Rama Mandi",
          costForTwo: "₹400 for two",
          avgRating: 3.8,
          cuisines: [
            "Burgers",
            "Biryani",
            "American",
            "Fast Food"
          ],
        }
    },
    {
        type: "Restaurant",
        info: {
          id: "476625",
          name: "Get Together",
          cloudinaryImageId: "k4utyk6mzlupvsa5tdda",
          locality: "G T Road",
          areaName: "Phagwara Law Gate",
          costForTwo: "₹200 for two",
          avgRating: 3.8,
          cuisines: [
            "Biryani"
          ],
        }
    
    },
    {
        type: "Restaurant",
        info: {
          id: "284674",
          name: "Subway",
          cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
          locality: "Hayden Park",
          areaName: "Rama Mandi",
          costForTwo: "₹350 for two",
          avgRating: 3.8,
          cuisines: [
            "Healthy Food",
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
          ],
        }
    },
    {
        type: "Restaurant",
        info: {
          id: "131466",
          name: "Dashmesh Vaishno Dhaba",
          cloudinaryImageId: "smtiu1iu8plyuwfntsil",
          locality: "Kaki Pind",
          areaName: "Rama Mandi",
          costForTwo: "₹200 for two",
          avgRating: 3.9,
          cuisines: [
            "North Indian",
            "Desserts"
          ],
        }
    },
    {
      type: "Restaurant",
      info: {
        id: "142123",
        name: "Lovely Bake Studio",
        cloudinaryImageId: "fppw1rwsajg7p6w2rnn1",
        locality: "Hardayal Road",
        areaName: "Jalandhar Cantt",
        costForTwo: "₹450 for two",
        avgRating: 4.4,
        cuisines: [
          "Desserts",
          "Bakery"
        ],
      }
    },
    {
      type: "Restaurant",
      info: {
        id: "284674",
        name: "Subway",
        cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
        locality: "Hayden Park",
        areaName: "Rama Mandi",
        costForTwo: "₹350 for two",
        avgRating: 3.9,
        cuisines: [
          "Healthy Food",
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
      }
    },
    {
      type: "Restaurant",
      info: {
        id: "524229",
        name: "Shama Chicken Corner",
        cloudinaryImageId: "mbdrjxyklv646hnsiirj",
        locality: "Singla Market",
        areaName: "Phagwara Central",
        costForTwo: "₹200 for two",
        avgRating: 4,
        cuisines: [
          "North Indian",
          "Biryani"
        ],
      }
    },
    {
      type: "Restaurant",
      info: {
        id: "211570",
        name: "Pizza Home",
        cloudinaryImageId: "ogg7962itcmeik7ffxq0",
        locality: "Kabir Nagar",
        areaName: "Phagwara Central",
        costForTwo: "₹300 for two",
        avgRating: 3.7,
        cuisines: [
          "Beverages",
          "Pizzas"
        ],
      }
    },
];

const RestaurantCard =({cloudinaryImageId, name, locality, cuisines, avgRating})=>{
    return (
      <div className="card">
        <img
          src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}
        />
        <div className="ratings">
          <p>{name}</p> 
          <p style={avgRating > 3 ? {color:"green"}:{color:"red"} }>{avgRating}</p>
        </div>
          <h2>{locality}</h2>
          <h3>{cuisines.join(" , ")}</h3>
      </div>
    );
  };

const Body = () => {
    return (
      <div className="restaurant-list">
        {RestaurantList.map((restaurant) => {
          return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />;
        })}
      </div>
    );
  };


const Footer = () => {
    return (
        <>
        <p className="footer">@Footer</p>
        </>
    );
};

const AppLayout = ()=>{
    return(
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)