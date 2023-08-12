import React from "react";
import ReactDOM  from "react-dom/client";
import './App.css';
import logo from './assets/logo.svg';
import icon from './assets/icon.png';
import iconn from './assets/iconn.gif';
import button from './assets/btn.svg';

//QueA 1.  Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)

const header = React.createElement(
    "div",
    {
        className: "title"
    },
    [
        React.createElement(
            "h1",
            {key: "h1"},
            "Namaste h1 tag"
        ),
        React.createElement(
            "h2",
            {key:"h2"},
            "Namaste h2 tag"
        ),
        React.createElement(
                    "h3",
                    {key:"h3"},
                    "Namaste h3 tag"
        )
    ]
);


// Que2. Create the same element using JSX :

const header2 = (
    <div className="header2">
        <h1>heading 1</h1>
        <h2>heading 2</h2>
        <h3>heading 3</h3>
    </div>
)

// Que3. Create a functional component of the same with JSX.

const Header3=()=>{
    return(
        <div className="title">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
        </div>
    );
}

// Que4. Pass attributes into the tag in JSX
const Header4=()=>{
    return(
        <div className="title">
            <h1 style={{color:"orange"}}>Heading 1</h1>
            <h2 style={{color:"blue"}}>Heading 2</h2>
            <h3 style={{color:"green"}}>Heading 3</h3>
        </div>
    );
}

// Que5.  Composition of Component(Add a component inside another)

const SubComponent=()=>{
    return <p>Namaste Sub-Component..</p>
}

const Header5=()=>{
    return(
        <>
            <p>Component is here..</p>
            <SubComponent/>
        </>
    )
}

/*  Que-B Create a Header Component from scratch using Functional Components with JSX

Add a Logo on left
Add a search bar in middle
Add User icon on right
Add CSS to make it look nice 

*/

const Header6=()=>{
    return(
        <div className="header">
            <div className="logo-bar">
                <a href="/"><img src={logo} className="logo" alt="logo" /></a>
            </div>
            <div className="searchBar">
                <input type="search" className="search" placeholder="Search..." autoFocus="true"/>
                <button type="submit"><img src={button} alt="" /></button>
            </div>
            <div className="icon-bar">
                <img src={iconn} alt="user-icon" className="icon" height={10} width={10}/>
            </div>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header6/>);
