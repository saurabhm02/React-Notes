import React from "react";
import ReactDOM from "react-dom/client";


/*
---parcel-----


* created A server
* HMR - Hot Module Replacement
* File watcher algorithm - made with C++
* BUNDLING
* Minify
* Cleaning our code
* DEV and production Build
* Super fast building algorithm
* Image optimization
* Caching while development
* Compresses
* Compatible with older version of browser
* HTTPS on dev
* Port Number
* Consistent Hashing Algorithm
* Zero Configuration
* Automatic code splitting
* Tree Shaking - Removig un-wanted

*/

const heading1 = React.createElement("h1", {id:"h1"}, "Namaste React");
const heading2 = React.createElement
(
    "h2", 
    {id:"h2"},
    "Namaste react + Parcel"
);

const container = React.createElement
(
    "div", 
    {id: "container"},
    [heading1, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);