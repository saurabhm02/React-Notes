# _Chapter 03 - Laying the Foundation_




### Que. Is `JSX` mandatory for React?

#### Answer: No

JSX is not mandatory for React. It is a JavaScript syntax extension that makes it easier to write React components. However, it is not required to use React. You can write React components using plain JavaScript, without JSX.

---
### Que. Is `ES6` mandatory for React?

#### Answer: No

 ES6 is not mandatory for React. However, it is strongly recommended to use ES6 when developing React applications. ES6 provides a number of features that can make React code more concise, readable, and maintainable. For example, ES6 arrow functions, class properties, and modules can all be used to improve the readability and maintainability of React code.
 
---

### Que. Is `TypeScript` mandatory for React?

#### Answer: No

 TypeScript is not mandatory for React. You can write React code in JavaScript just fine. However, TypeScript can be a great addition to React projects for a number of reasons:
 	* Type Safey
 	* IntelliSense
 	* Documentation

---

### Que. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.

- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable or React element. 
The `{}` can embed a javascript expression or a variable or React element inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value. If component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
#### Example

```js
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```
---

### Que.  How can I write `comments` in JSX?

JSX comments are written as follows:
- `{/*  */}` - for single or multiline comments
#### Example

```
{/* A JSX comment */}
{/* 
  Multi
  line
  JSX
  comment
*/}  
```
---
### Que. What is `<React.Fragment></React.Fragment>` and `<></>`?

→ React.Fragment and <> are both syntax for creating a React fragment. A fragment is a special type of component that allows us to return multiple elements from a React component without adding extra nodes to the DOM.

→ <React.Fragment></React.Fragment>
syntax is the longhand syntax for creating a fragment. 

→ The <></> syntax is the shorthand syntax for creating a fragment. The only difference between the two is that the shorthand syntax does not support the
`key` attribute.

#### Example
```js
return (
        <React.Fragment>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </React.Fragment>
    );

return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
```

---

### Que. What is `Reconciliation` in React?

* The reconciliation algorithm is designed to be efficient, so that React can update the UI quickly without having to re-render the entire DOM. The virtual DOM allows React to make changes to the UI without affecting the actual DOM until the very end. This can save a lot of time and resources, especially in large applications with complex UIs.
* The reconciliation algorithm works as follows:

	→ React creates a virtual DOM representation of the component's current state.
	→ React compares the virtual DOM to the component's previous state.
	→ React identifies any changes between the two states.
	→ React updates the virtual DOM to reflect the changes.
	→ React compares the updated virtual DOM to the actual DOM.
	→ React updates the actual DOM to reflect the changes in the virtual DOM.

---

### Que. What is `React Fiber`?

* React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter.
* The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.
* Because Fiber is asynchronous, React can:
	→ Pause, resume, and restart rendering work on components as new updates come in
	→ Reuse previously completed work and even abort it if not needed
	→ Split work into chunks and prioritize tasks based on importance

---

### Que.  Why do we need `keys` in React?

We need `Keys` are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are unique Identifier used to give an identity to the elements in the lists.
Keys should be given to the elements within the array to give the elements a stable identity.

#### Example
```js
<li key={0}>1</li>
<li key={1}>2</li>
<li key={2}>3</li>
```
---

### Que. Can we use `index as keys` in React?

Yes, we can use the `index as keys`, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state.
Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.

---

### Que. What is `props in React`?

 props stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic.
#### Example
```
function App() {
  return (
    <div className="App">
      <Tool name="Saurabh" tool="Figma"/> // name and tool are props
    </div>
  )
}
```
---


### Que. What is `Config Driven UI`?

→ Config Driven UI (also known as configuration-driven UI or configuration-based UI)   is a software development approach that uses external configuration data and files to drive the development of the user interface (UI). This approach allows the UI to be easily customized and maintained without the need to modify the underlying codebase.

→ `Config Driven UI` are based on the configurations of the data application receives. It is rather a good practice to use config driven UIs to make application for dynamic. 
It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort.

→ A typical login form, common in most of the Apps. Most of these forms also get frequent updates as the requirements increase in terms of Form Validations, dropdown options,.. or design changes.

---

### Que.  Difference between `Virtual DOM` and `Real DOM`?

DOM stands for `Document Object Model`, which represents your application UI and whenever the changes are made in the application, this DOM gets updated and the user is able to visualize the changes. DOM is an interface that allows scripts to update the content, style, and structure of the document.
* `Virtual DOM`
    → The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM.

    → Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.

    → Reconciliation is a process to compare and keep in sync the two files (Real and Virtual DOM). Diffing algorithm is a technique of reconciliation which is used by React.
* `Real DOM`
    → The DOM represents the web page often called a document with a logical tree and each  branch of the tree ends in a node and each node contains object programmers can modify the content of the document using a scripting language like javascript and the changes and updates to the dom are fast because of its tree-like structure but after changes, the updated element and its children have to be re-rendered to update the application UI so the  re-rendering of the UI which make the dom slow all the UI components you need to be rendered for every dom update so real dom would render the entire list and not only those item that receives the update .

|   `Real DOM`    |   `Virtual DOM` |
|-------------|-----------------|
| DOM manipulation is very expensive  | DOM manipulation is very easy  | 
| There is too much memory wastage  | No memory wastage  |
| It updates Slow | It updates fast |
| It can directly update HTML | It can’t update HTML directly  |
|  Creates a new DOM if the element updates. | Update the JSX if the element update |
| It allows us to directly target any specific node (HTML element) | It can produce about 200,000 Virtual DOM Nodes / Second. |
| It represents the UI of your application | It is only a virtual representation of the DOM |

