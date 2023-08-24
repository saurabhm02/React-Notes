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

---

<h1 align="center">$\textcolor{red}{\textsf{ONE-WAY DATA BINDING IN REACT}}$ </h1>

```js

const Body = ()={
  const SearchTxt = "KFC";
  return(
    <>
      <div>
        <input type="text"
            placeholder="Search..."
            value  {SearchTxt}
        />

      </div>
    </>
    );
};

I have a variable `SearchTxt` and if i put that in `value` , Then the value "KFC"  will go inside my input box.
```
-▷ I'm not able to edit the value `"KFC"` because it is a hardcoded value.
-▷To change the value in the input box, we need to modify the variable `SearchTxt`.
But, if we write something, it won't change `searchTxt`.
This is called `One-Way Data binding`.

### Que. How will i change the value of `SearchTxt` ?

* Write an `onChange` method.

```js 
onChange = {(e)=> onChangeInput}
```
Create an `OnChangeInput` function. It takes a function(Which is a callBack fn) which have a `e` event.

So, whenever input is chaned, this function will be called,




-▷ If we need to maintain a variable that changes itself, then need to maintain  a "React-kinda" variable.

-▷ `React Variable `It's like a state variable.


$\textcolor{red}{\textsf{[Every component in React maintains a state. So, we can put some variables on to that state]}}$


$\textcolor{green}{\textsf{Every time we have  to create a local variable we use state in it.
}}$

-▷ In react, If I want to create a local variable like $\textcolor{green}{\textsf{SearchTxt}}$, I will create it using $\textcolor{red}{\textsf{UseState Hook}}$

---
<h1 align="center">$\textcolor{red}{\textsf{useState Hook}}$ </h1>
-▷ New way of creating variables =>

```js
 Const [SearchTxt] useState();
```
-▷If  we have to create local variables in react we need to use state variables.

-▷ State variables are created using `useState hook`.


$\textcolor{green}{\textsf{What is Hooks?}}$

* Hooks are normal funitions.
* I get `useState` hook from 'react.'.library.
(imported using name import)

$\textcolor{green}{\textsf{What is the function of usestate?}}$

* It's to create state variables.

```js
const [SearchTxt] = useState();
```
[This function returns an array. The first element of this array is variable name]

[`SearchTxt` is a local state variable]

[Second dement is a set function to update the variable]

-▷ TO give a default value to my useState variable, do this =>

```js
Const [SearchTxt] = useState("KFC");
```
-▷ This is how we create a local state variable in react. 

$\textcolor{green}{\textsf{In javascript, we create a Variable `searchTxt` having a value "KFC" like this =>
 ```js 
const Search Txt = "KFC";
```
}}$


-▷ In react, to modify the variable `searchTxt` I have to use function.
$\textcolor{red}{\textsf{useState()}}$ gives us that function.


Let us call that function set `SearchTxt()`

```js
const [searchTxt, setSearchTxt]= UseState("KFC");
  onChange = {{(e) => {
    (e.target.value);
  }}

```

```js
const Body=()=>{
  const [searchTxt, setSearchTxt] = useState ("KFC");
  return(
    <>
      <div classname="search-container"> 
        <input type="text" 
         className="search-input" 
         placeholder="Search.." 
         value = {search Text} 
         onChange = {(e) => { 
            SetSearchTxt(e.target.value)
         }}
        <button className = "Search-btn"> 
          Search-{searchTxt}
        </button>
      </div>
    </>
  );
};
```
