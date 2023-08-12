# _Chapter 01 - Inception_

### Que. What is Emmet ?
 `Emmet` is a free plugin for `text editors` that allows you to type `shortcuts` that are then expanded into full pieces of code. It is a popular tool among `web developers`, as it can help them to save time and effort when writing `HTML, CSS, and other code`.
For example in a HTML file:

1. `html:5` or ` ! ` gives :

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

```
2. `div>div>p` gives :

```
<div>
    <div>
        <p></p>
    </div>
</div>

```

### Que. Difference between a Library and Framework ?
 
| Feature  |      `Library`      |  `Framework` |
|-------------|-----------------|--------|
| Purpose | Provides functionality for a specific task  | provides a structure for developing software applications
| Control | We control the flow of the application | The framework controls the flow of the application |
| Customizaton | More customizable | Less customizable 
| Performance | More efficient | Less efficient

### Que. What is CDN ? Why do we use it?
 
* A `content delivery network (CDN)` is a system of distributed servers (network of proxy servers) that deliver web content to users based on their geographical location.
* CDNs provide a number of `benefits for websites, including improved performance, availability, security, and bandwidth costs`. If we are looking for ways to improve our website, using a CDN is a great option.



### Que. Why is React known as React?
 
* `React` is called React because of its core principle of being `"reactive"`.The name React signifies the framework's ability to efficiently update and render user interfaces in response to changes in application state.
* Basically, React is called React because it reacts to changes in data. This is a key feature of React, and it's what makes it so `powerful for building user interfaces`.


### Q: What is **crossorigin** in script tag?
 React is used to enable `Cross-Origin Resource Sharing (CORS)` for a script tag. CORS is a mechanism that allows a web page to access resources from a different origin. By default, browsers block cross-origin requests to protect against `cross-site scripting (XSS) attacks`.
### _Syntax_
```sh
<script crossorigin="anonymous|use-credentials">
```

### Que. What is difference between React and ReactDOM ?

| Feature | `React` | `ReactDOM` | 
|---------|-------|----------|
| Purpose | Creates and Manages the state of our application | Renders our React components to the DOM
| API | Provides methods for creating and managing components, state, and events | Provides methods for rendering components to the DOM 
| Use Cases | Used in both web and mobile apps | Used only in web apps 


### Que. What is difference between `react.development.js` and `react.production.js` files via `CDN`?

* The main difference between react.development.js and react.production.js files via CDN is the file size and the level of optimization.
   * `react.development.js` is the larger file and is optimized for development. It is used for development purpose.
   * `react.production.js` is the smaller file and is optimized for performance.It is used for Production.


## Q: What is `async and defer`?

| Difference  |     `async`     |  `defer`  |
|-------------|-----------------|-----------|
| code | `<script async src = '...'></script>`  |  `<script defer src = '...'></script>`|
| Loading sequence | Does not guarantee the execution sequense of the script    | Guarantees the execution sequence of scripts in wich they are ordered.   |
| Execution sequence | Loads the scripts while HTML is being rendered. When scripts are loaded, then HTML rendering stops and execution of script starts. When execution is completed, HTML rendering resumes.  | Loads the scripts while HTML is being rendered. Executes the scripts only after the HTML is completely rendered