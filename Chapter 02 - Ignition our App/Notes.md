# _Igniting Our App Notes_

# We will build our own `create_React_app`.🚀

## To make an App production ready, we should :-
	 (1). Minify our file (remove our console.logs, bundle things up).
	 (2). Need a server to run things.
Even through we can load aur `App.js`, we can't get optimized version.

>Note:-
> Minify ->Optimization ->Clean console ->& Bundle.

## In React, to get external functionalities, we use `BUNDLERS`
	 Webpack
	 vite 
	 parcel
* In `create-react-app`, the bundler used is `webpack`

## Most bundlers do the same job
* Bundlers are packages if we want to use a package in our code, we have to use a `Package-Manager`.
* We use a `package-manager` known as `npm` or `yarn`

## npm :- No Problem man😅
* `npm` dosen't mean node pacakge manager but everything else.
```js


> npm init   // this command create a `package.json` file
``` 
* we use npm because we want a lot of packages in our project/react app.
```js
> npm init -y   // this command will skip lot of options
```
----
* In below Code `-D` and `--save-dev` denotes :- devdepenndency - bcoz, we want it in our developer machine
```js
> npm install -D parcel
OR
> npm install --save-dev
```
`parcel` denotes:- it is one of the dependency . then we'll we get `package-lock.json` file.

* If there is any error while installing then try below code to install `parcel`
```js
npm install -D parcel --registry=https://registry.npmjs.org
```
----

### `caret(^) & tilde(~) sign`
*  symbols are used to specify the version of a package that should be installed. The `tilde(~)` matches the most recent patch version, while the `caret(^)` matches the most recent minor version.

* our project will automatically update  if we use caret sign(^).
```js
"devDependencies": {
    "parcel": "^2.9.3",
  }
```

### `Package-lock.json`
* It will tell , which exact version of the library we are using

* `Common issues`
	* "Something is working on my localhost/mymachine but not works in production" Why ?
		* `package-lock.json` file tell the exact version of library we are using. Suppose for developing we're using 2.8.4 version & it is write in `package-lock.json` file.
		* But in `package.json` file, it will be like "2.8.2"
		* `package-lock.json` file is an "x" file that locks the version.

### `node_modules`
* It get installed after `npm install -D parcel", it is like a database for the npm.
* This is where the Super Powers comes from.
* Our app has dependency on `Parcel`.
* `parcel` has also dependencies on something else.
* All these dependencies/superPowers are in `node_module`.

### Que. Why we don't put `note_mudules` into git ?

* Because, our `package-lock.json` file have sufficient information to recreate `node_mudeules`.
* `package-lock.json` file keep maintain the version of everything in `node_mudeules`.

* `node_mudeules` in our machine can be regenerated in server using the `package-lock.json` file.


>Note:
>Previosly we used CDN links to get react into our app. But This is not the Good way .
We need to Keep react in our `node_mudeules`.

```js
> npm install react
```
If the above code give some error then try 
```js
> npm install react --registry=https://registry.npmjs.org
```

Now we have to install React Dom in our project 

```js
> npm install react-dom
```

### To ignite our app.
```js
> npx parcel index.html
```
here, `npx` means `execute using npm`
and `index.html` is the entry point 

* After `click enter`, Then a miniserver is created for us, and it show
```
Server running at http://localhost:1234
✨ Built in 1.06s
```

----
	As we removed CDN links, we don't have react in our app.
	So, for that we want to import it into aur app. for that we use the keyWord "import".

>Never ever edit/touch `node_modules` & `package-lock.json`

----

* Normal JS browser don't know `"import"`. SO, it shows error.
* For that 
	* import React from "react";
	* import ReactDOM from "react-dom/client";
* As we got an error, we have to specify to the browser that "we are not using a normal scripting, but a module".
```js
<script type="module" src="App.js"></script>
```
* We can not import & export scripts inside a tag. modules can import and export.
----
>Note:
>### Hot Module Reload(HMR):
>Means that parcel will keep a track of all the files which you're updating.

### How HMR works?
* There is `File Watcher Algorithms`(written in C++). It keeps track of all the files which are chainging realtime & it tells the server to reload.

* These all are done by "parcel".
* There will be a folder called `parcel-cache`which will be there automatically.
* In our projects, parcel needs some space. So, it creates `parcel-cache1`.
----
>Note
>`dist` folder keeps the files minified for us when we run command.
----
```js
> npx parcel index.html
```

* This will creates a faster development version of our project & serves it on the server.

* When I tell parcel to make a production build:
```js
> npx parcel build index.html
```

* It creates a lot of things, minify our file And `parcel` will build all the production files to the `dist` folder.

>### Que. What takes a lot of time to load in a website?
>* Media - images
	Parcel does image optimization also.

* Parcel does take care of our older version of browser.
* Sometimes we need to test our app on `https`. bcoz, something only works on https.
* parcel gives us a functionality that we can just build aur app on `https` on dev machine
```js 
> npx parcel index.html --https
```

* We can put `parcel-cache` in gitignore.
because, anything which can be auto-generated should be put inside gitignore.

>Parcel uses `consistent Hashing Algorithm`
----

### Some `Parcel` features in a glance:

* HMR - Hot Module Reloading
* File Watcher Algorithm - C++
* Bundling
* minify code
* Cleaning our code
* Dev and producion build
* Super fast build algorithm
* Image Optimization
* Caching while development
* HTTPS on dev
* port Number
* Consistent Hashing ALgorithm
* Zero config
* Tree Shaking

----
### Transitive Dependency
* A transitiv dependency in React is a dependency of a package that you depend on.
* For example, if our React application depends on the `react-router` package, then
`react-router` depends on the `react-dom`
package. This means that the
`react-dom`package is a transitive dependency of our React application, even though we didn't explicitly list it in our
`package.json`file.

* Transitive dependencies can be a bit tricky to manage, because they can introduce security vulnerabilities or compatibility issues into our application. 
* For example, if the `react-dom` package has a security vulnerability, then our React application will be vulnerable to attack even if we haven't updated the
`react-dom`package ourself.
----

### Que. How do I make our ap compactible with  older browser 

* There is a package called `browserslist` & parcel automatically gives it to us.
* `browserslist` makes our code compactible for a llot of browsers.

* In `pakage.json` file do 
```js
"browserslist" : [
	"last 2 versions"
]
```
>This support 74% of all browser in the world
>The above code means my parcel will make sure that my app works in last 2 version of all the browsers avalable.

* If we don't care about other browser, except chrome, then do
```js
"browserslist" : [
	"last 2 chrome versions"
]
```
> It support 16%

## That's why we say, `Parcel is a beast`🔥
