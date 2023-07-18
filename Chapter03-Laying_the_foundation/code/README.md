# #3 Session's code Assignment

### `Universal code for this session Assignment`
```js
import React from "react";
import ReactDOM  from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
```
----

### Que-A(1). Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)

```js
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
root.render(header);
```
----
### Que-A(2). Create the same element using JSX :
```js
const header = (
    <div className="title">
        <h1>heading 1</h1>
        <h2>heading 2</h2>
        <h3>heading 3</h3>
    </div>
);
root.render(header);
```
----
### Que-A(3). Create a functional component of the same with JSX:
```js
const Header=()=>{
    return(
        <div className="title">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
        </div>
    );
}
root.render(<Header/>);
```
----
### Que-A(4). Pass attributes into the tag in JSX:
```js
const Header=()=>{
    return(
        <div className="title">
            <h1 style={{color:"orange"}}>Heading 1</h1>
            <h2 style={{color:"blue"}}>Heading 2</h2>
            <h3 style={{color:"green"}}>Heading 3</h3>
        </div>
    );
}
root.render(<Header/>);
```
----
### Que-A(5). Composition of Component(Add a component inside another):
```js
const SubComponent=()=>{
    return <p>Namaste Sub-Component..</p>
}

const Component=()=>{
    return(
        <>
            <p>Component is here..</p>
            <SubComponent/>
        </>
    )
}
root.render(<Component/>);
```
----
### Que-B. Create a Header Component from scratch using Functional Components with JSX
	- Add a Logo on left
 	- Add a search bar in middle
	- Add User icon on right
	- Add CSS to make it look nice

* App.js
```js
import './App.css';
import logo from './assets/logo.svg';
import iconn from './assets/iconn.gif';
import button from './assets/btn.svg';

const Header=()=>{
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

root.render(<Header/>)
```

* App.css
```js
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: antiquewhite;
    height: 60px;
    padding: 30px;
}
.icon-bar, .logo-bar{
    cursor: pointer;
    text-align: center;
    flex-grow: 1;
}
.logo, .icon{
    height: 3rem;
    width: 3rem;
}
.logo-bar{
    background-blend-mode: transparent;
}
.searchBar{
    flex-grow: 2;
    display: flex;
    justify-content: center;
    align-items: center;
}
.search {
    width: 90%;
    padding: 0.5rem 1rem;
    outline:none;
    border:2px solid transparent;
    border-radius:2rem;
}
.search:focus{
    transition:.5s ease-in;
    border:2px solid rgb(77, 58, 70);
}
button{
    background: none;
    border: none;
    cursor: pointer;
}

```

* You can check the result [here](https://deluxe-puppy-0e8485.netlify.app/)