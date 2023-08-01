# _Laying the Foundation_


### What is pollyfill
pollyfill si basically a code which is a replacement for newer version of code 

>Note :
> JSX is "HTML-like" syntax but it not html inside javascript

### Que. What converts new code to older code(for older version)?
* We do not need to write pollyfill. Babel does i automatically
----
>npx - executing commands without downloading packages.
>npm - will download required packages

>Note:
>Parcel will not remove console.log automatically. we need to configure for it. There is a package for it, named `babel-plugin-transform-remove-console' either from babel website or npmjs website
```js
>npm install babel-plugin-transform-remove-console --save-dev/ -D
```

* Before installing this package, create a folder called `.babelrc`
and inside include :-
```js

{
    "plugins": [["transform-remove-console",
    {"exclude": ["error", "warn"] }]]
}
```
* After configure, simply run
```js
> npm run build
```
* Now we can see that console.log will be removed.

----
>Render - Means updating something in the DOM
----


### React-key Reconcilation :
* When there are sibling in an array, we need to gives keys for each sibling.
* It helps to make React applications fast and efficient by minimizing the amount of work that needs to be done to update the changes.
* So, you don't have to worry about what changes on every update.
* Eg. 
```js
<ul>
	<li> First </li>
	<li> Second </li>
</ul>
```
When adding an element at the end of the children: the tree works well
```js 
<ul>
	<li> First </li>
	<li> Second </li>
	<li> Third </li>
</ul>
```
* `render()` Function is creating a tree of react elements.
* On the next state of props update, `render()` Fn will return a different tree of React elements.
* Whenever React is updating the DOM, for eg:-
```js
<ul> 
	<li>Hello</li>
	<li>World</li>
</ul>
```

* Now, if I introduced one child over the top, then `react` will have to do lot of efforts react will have to
`re-render everything.
* That means `[react will have to change the whole DOM Tree.]

```js
<ul> 
	<li>Hey</li>
	<li>Hello</li>
	<li>World</li>
</ul>
```
* As react has to re-render everything, it will not give you good performance.
* In Large-Scale application, it is far too expensive.


## SOLUTION 
### Introduction of keys

* React supports `Key` attribute.
* When children have keys, React uses the key to match `Children` in the original tree with chindren in subsequent tree. Thus, making tree-Conversion efficient.

```js
<ul> 
	<li key = "01">Hey</li>
	<li key = "02">Hello</li>
	<li key = "03">World</li>
</ul>
```

* Thus react has to do very less work. So always use Keys whenever you have multiple children.

----


### Create-Element

* `React.createElement()` is creating an object.
* This object is converted into HTML code and puts in upon DOM.

* If we want to build a big HTML structure, then using `createElement()` is not a good solution.
* So, there comes introduction of JSX.

----
### JSX

When facebook created React, the major concept  behind bringing react was "That we want to write a lot of HTML using JavaScript" because JS is very performant.

| `React` | `JSX` | 
|---------|-------|
| import {createElement as ce} from "react"; | <- Instead of writtng all these  
| const heading = React.ce ("h1",{ id: "title", Key: "h1" }, "Hello World"); | ```js const heading = <h1>Hello World</h1> ```This is nothing, but JSX


* `JSX` is not `HTML inside JavaScript`
* `JSX` has `HTML-like syntax

This is valid JavaScript code :-
```js
const heading = (
	<h1 id ="Title" key ="01">
		Hello World
	</h1>
);

NOTE:- React keeps track of `key`.
```
``` 
NOTE:- 
     React.createElement gives us an Object, which is then converted to html and puts into DOM
	 JSX uses React.createElement (behind the scenes), which gives Object, and then into HTML, and it is put into DOM
	 Babel does it. Babel converts JSX. JSX was developed by Facebook.
	 Babel is must to use JSX.

```
### Que. Is JSX HTML inside JS? No. 
Ans :- JSX is a HTML like Syntax, and not HTML inside JS.

* `JSX` is created to empower React
Advantages of `JSX`
	- Developer experience
	- Syntactical Sugar
	- Readability
	- Less Code
	- maintainability
	- No Repeatition

```
NOTE :- Babel comes along with parcel.
```
----
### COMPONENT

`Everything is a component in React.`

* React Components:
	- 2 Types :-
		* a) Functional Component - NEW Way of writing code
		* b) Class Based component - OLD Way

* Functional Component:-
	- is nothing but a javaScript function.
	- Is a normal JS fn which returns some piece of react elements(`JSX`).

	- Eg:-
	```js 
	const HeaderComponent = ()=>{
		return <h1> Hello World </h1>
	};

	 For any component,
	```
	- Name starts with capital letter.
	(it is not mandatory, but it's a convention)

	- To render functional component, write :-
	```js
	<HeaderComponent/>
	```

| `React Element` | `Functional Component` | 
|---------------|-----------------|
| const heading=(<h1 id="title" key="01">Hello World</h1>); | const heading =()=> { return(<h1 id="title" key="01">Hello World</h1>);};  
| React Element is finally an object | Functional component is finally a function 

----

### *The next Amazing thing* 

1)
* ```js
	const Title = () =>{
			<h1> Hello World </h1>
	}
	It is a functional component
  ```

* ```js
	const HeaderComponent =()=>{
		return (
			<div>
				<Title/>
				<h2> Hello </h2>
				<h2> World </h2>
			</div>
		);
	};
  ```
`<Title/>` is a component composition . instead of these we can also write {<Title/>}

This is a normal javascript function


2)
* ```js
  const title =(
  	<h1> Hello World </h1>
  );
  ```
This is a normal variable


* ```js
  const HeaderComponent = ()=>{
  	return (
  		<div>
			{title}
			<h2> Hello </h2>
			<h2> World </h2>
		</div>
  	);
  };
  ```

----

`NOTE :-`
* Whenever we write JSX, we can write any piece of javascript code between paeanthesis{}, it will work.
* JSX is very secure.
* JSX makes sure our app is safe.
* IT does Sanitization.

```js
const data = api.getData();
const HeaderComponent = ()=>{
	return(
	 	<div>
	  		{data}
	  		h2> Hello World </h2>
	  	</div>
	);
};
```

* *Component Composition* 
    If I have to use a component inside a component. Then it is called component composition / composing components.
----