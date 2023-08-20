# _Let's get Hooked_

## React File Structure:- 

* React dosen't have opinions on how we put files into folders.

* Some devs group their files by features .

* While moving files into folders, we need export it so that we can import it where necessary. 

* There are 2 ways of exporting :-

#### $\textcolor{red}{\textsf{export default :-}}$

→ This is the default way.

 → This means you want to export onLY value.

→ There can be only one using import default export.
	
→ `Default export` is the value that will be imported from the module, if we use the Simple import statement :-

```js
import Title from "./components/Title";
```

`Title` is the name that will be given locally to that variable assigned to contain the vali and it doesn't have to be named like the origin export.

---
$\textcolor{red}{\textsf{Named exports :-}}$

Eg- 
```js
export const Title' = () => { }
```
→ This is a named export with a name `Title`

→ It can be imported like :-
  ```js
	import {Title} from "./compments/Header";
```
    
  → If we created a new file. which have 2 compments and I want to export both of these components.

```(i) I can wrap these components into single object and can export.```

```(ii) or I can export it ```

→ If Header.tsx have 2 components :- 
		Header & Title 

  Then, either we can export each using names, or wrap it into single component and use default export. So, 
 ```js
 import {Title, Header ]} from "./components/Header" ;
 ```
  Or we can use :- 
  ```js
   import * as Obj from "./components/Header";
  ```
  Then, we can use
   "Obj. Title" in our code

  |  `header.js`  |  `App.js` |
  |---------------|--------------|
  | export const Title =()=>{..} | import Header, {Title} from "./comp/Header"; |
  | const Header = ()=>{..} 
  export default Header  | 


  When we are using the component in Same file, we don't have to export

---

<h1 align="center">$\textcolor{blue}{\textsf{CONFIG FILE}}$ </h1>

→ Create a config file in config file in our project. 
→ I put all the hard coded things into my
config file (config Js).
→ Also called as constants file (`constants.js').

→ Config file shoud will be like :-
```js
Const IMG_CON_URL = "https://some url"
```

→ make this as named export 
```js
export const IMG_CON_URL = "https://some url";
```
→ Then impost it like :-
```js 
 import {IMG_CON_URL from "./config",
```
→ Put all hardcoded data. So, put restaurant List also in config file.

---

<h1 align="center">$\textcolor{magenta}{\textsf{Building Search Functionality }}$</h1>


-▷ Search bar - inside Body. 
```js
Const Body = () => {
	return(
        <>
           <div classname="search-container">
               <input
               type="text"
               ClassName="search-input"
               Placeholder="Search"
               value=" "
               />
               <button classname = "Search-btn">
                 Search
              </button>
          </div>
        </>
    );
};

```

-▷ We've got search input and search button with us. But if I try to write inside my input box, it's not working (because it's controlled by React.)

-▷```[If I write the same code inside my HTML file, it will work.]```