# Chapter 03 - Laying the Foundation

## #3rd Session's Theory Assignment
	- What is JSX?
	- Superpowers of JSX
    - Role of type attribute in script tag? What options can I use there?
    - {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}in JSX
----


## Que. What is `JSX`?
* JSX stands for JavaScript XML.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
* JSX makes it easier to write and add HTML in React.
* JSX converts HTML tags into react elements.

### Example 1 using JSX:
```
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```
### Example 2 Without JSX:
```
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```


## Que. Superpowers of `JSX`.
* It allows us to write HTML-like code in JavaScript files. This makes it much easier to create and maintain React components, as we can use the same syntax for both the markup and the logic.
* JSX is easy to maintain and debug.
### Example
```
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>;
}
```


## Que. Role of `type` attribute in script tag? What options can I use there?
* The `type` attribute in the `<script>`
tag specifies the type of script that is being embedded in the document.
* The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.
### `type` attribute can be of the following types:
- `text/javascript` : It indicates that the `script`tag contains JavaScript code.
    ### Syntax
    ```
    <script type="text/javascript"></script>
    ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.

## Que. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
* The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable. 
The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : It is a more explicit way to represent a reference to a React component. It includes the opening and closing angle brackets, as well as the closing slash. 
This is the preferred way to write JSX, because it is more readable and easier to understand.
A component is written inside the `{<  />}` expression.

- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```