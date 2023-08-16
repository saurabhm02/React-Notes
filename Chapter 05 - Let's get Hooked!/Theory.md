# Chapter 05 - Let's get Hooked!

## Que.  What is the difference between `Named export`, `Default export`, and `* as export`?
→ ES6 provides us to import & export a module and use it in other files. ES6 provides two ways to export a module from a file: `named export` and `default export`.
`Named exports` allow us to export multiple values from a module with specific names. This is useful for organizing our code into smaller, reusable components.

In `Named export`, the component is exported from MyComponent.js file like:
```js
export const MyComponent1 = () => {}
export const MyComponent2 = () => {}
``` 
and the component is imported from MyComponent.js file like: here we must use `{}` in MyComponent.
```js
// ex. importing a single named export
import { MyComponent } from "./MyComponent";

// ex. importing multiple named exports
import { MyComponent, MyComponent2 } from "./MyComponent";

// ex. giving a named import a different name by using "as":
import { MyComponent2 as MyNewComponent } from "./MyComponent";
```

`Default exports` allow you to export a single value from a module. This value is considered to be the "main" export of the module, and it can be imported without specifying a name.
In `Default export`, the component is exported from MyComponent.js file like:
```js
const MyComponent = () => {}
export default MyComponent;
```
and the component is imported from MyComponent.js file like: here we must omit `{}` in MyComponent.
```js
import MyComponent from "./MyComponent";
```

`* as export` is a special syntax that allows you to export all of the values from a module as a single object. This is useful for exporting large modules or modules that contain a lot of related values.
In `* as export`, the component is exported from MyComponent.js file like:
```js
export const MyComponent1 = () => {}
export const MyComponent2 = () => {}
export const MyComponent3 = () => {}
``` 
and the component is imported from MyComponent.js file like:
```js
import * as MainComponents from "./MyComponent";
```
Now we can use them in JSX as:
```js
<MainComponents.MyComponent />
<MainComponents.MyComponent2 />
<MainComponents.MyComponent3 />
```
We can use `Named export` and `Default export` together. So you should export like:
```js
export const MyComponent2 = () => {}
const MyComponent = () => {}
export default MyComponent;
```
and import like:
```js
import MyComponent, {MyComponent2} from "./MyComponent";
```

---
## Que.  What is the importance of `config.js` file?
→ The `config.js` file that is used to configure the settings for a  application. It is typically located in the root directory of the application. 

The `config.js` file can be used to store a variety of settings, such as:

	The application's port number
	The database connection string
	The API keys for third-party services
	The application's environment (e.g., development, staging, production)

By storing these settings in a `config.js` file, the application code can be kept clean and DRY (Don't Repeat Yourself). This makes the code easier to read, understand, and maintain.

The `config.js` file can also be used to make the application more flexible and adaptable to different environments.
For example, the application's port number can be set to a different value in the development environment than in the production environment. This allows the application to be tested on a different port number in development than it will be used on in production.
 
For example:
```
Chetan
```
Usually, though, an application needs to keep track of more than just one piece of information, so configuration often uses a key and a value:
```js
NAME='Chetan'
SURNAME='Nada'
```
---

## Que. What are `React Hooks`?
→ In React version 16.8, React introduced a new pattern called Hooks. It allow us to use state and other React features without writing a class. Hooks are functions that you can call from within your functional components to access React features.

Some of the benefits of using React Hooks include:

	They make it easier to write reusable and testable components.
	They can help you to reduce the amount of code in your components.
	They can make your components more performant.
Here are some of the most common React Hooks:
```js
- `useState`: This hook allows you to manage state in your functional components.
- `useEffect`: This hook allows you to perform side effects in your functional components.
- `useContext`: This hook allows you to access context data in your functional components.
- `useReducer`: This hook is an alternative to useState for managing complex state.

- `useCallback`: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
- `useMemo`: It returns a memoized value that helps in performance optimizations.
- `useRef`: It returns a ref object with a current property. The ref object is mutable. It is mainly used to access a child component imperatively.
- `useLayoutEffect`: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
- `useDebugValue`: Helps to display a label in React DevTools for custom hooks.

```
---

## Que.  Why do we need `useState Hook`?
→ `useState hook` is used to maintain the state in our React application. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component.
The  useState hook is a special function that takes the `initial state` as an `argument` and `returns an array` of two entries.  UseState encapsulate only singular value from the state, for multiple state need to have useState calls.
#### Syntax for useState hook
```js
const [state, setState] = useState(initialstate);
```
#### Importing: To use useState you need to import useState from react as shown below:
```js
import React, { useState } from "react";
```
we can use Hooks in Functional Components
```js
const Example = (props) => {
  // You can use Hooks here!
  return <div />;
}
```