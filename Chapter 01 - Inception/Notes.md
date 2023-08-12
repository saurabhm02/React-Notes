# _Inception Notes_

* `React` is a library
* Main difference b/w framework & library
  * Library takes minimum effort to put it, ito our code.

## Create a `h1` in `HTML` :
```js
<head>
    <title>Namaste React</title>
</head>

<body>
    <div id="root">
        <h1>Hello World</h1>
    </div>
</body>

```

## To do the above code in `javaScript` :
```js

<body>
    <div id="root"></div>

    <script>
        const heading = document.createElement("h1");
        heading.innerHTMl = "hello World";
        const root = document.getElementById("root");
        root.appendChild(heading);
    </scrippt>
</body>
```
output of the code in Live Server:-
```
<div id="root">
    <h1>Hello World</h1></div> 
</div
```

## To do the above code in `ReactJS` :
* If there are already some code present in the `root` element then , `React` will overide it
```js

<body>
    <div id="root"> Hello World </div>

  <!-- CDN links for initalize React-->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  <!--code-->
    <script>
        const heading = React.createElement("h1", {}, "Namaste React");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
    </script>
</body>
```
output of the code in Live Server:-
```
<div id="root">
    <h1 id="title">Namaste React</h1></div> 
</div
```
## What is the { } denotes in the above code

* Whatever we pass inside this, it will goes as tag attributes of that element

## Practice Que. Do the below HTML code using  React 
```
<div id="container">
    <h1 id="title1">Heading 1</h1>
    <h2 id="title2">Heading 2</h2>
</div>
```
`Code :-`
```js

<!-- first we link CDN script for link React with HTML -->

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<script>
    const heading1 = React.createElement("h1", {id : "title1"}, "Heading 1");
    const heading2 = React.createElement("h2", {id: "title2"}, "heading 2");

    const container = React.createElement("div", {id: "container"}, [heading1, heading2]);

    const root = reactDOM.createRoot(document.getElementById("root"));
    root.render(container);
<script>
```
output of the code in Live Server:-
```
<div id="root">
    <div id="container">
        <h1 id="title1">Heading 1</h1>
        <h2 id="title2">Heading 2</h2>
    </div>
</div>
```

## `Important Points :-`

* If we write the React script before the 2 CDN links, then we will get an error in the console “React not defined” and the
react elements will not be rendered properly
* Developers write :-
```<div id=”root”>Not Rendered Yet</div>```
Because, if something happens due to which react is not rendered properly in the root element, that will be
easily detected.
* The heading1,2 and 3 in example-4, are all react elements and we know that they are nothing but objects and render
function is used to overwrite the contents of root HTML element with those elements.
