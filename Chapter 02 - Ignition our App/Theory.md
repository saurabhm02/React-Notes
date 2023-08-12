
# _Chapter 02 - Igniting our App_


## Que. What is **NPM**?
`npm is a tool` that helps us to find, install, and manage JavaScript packages. Packages are bundles of code that can be used to extend the functionality of our JavaScript applications. There are over 800,000 packages available in the `npm registry`, so we're sure to find something that can help us with our project.

- `npm` alternative is `yarn`

### How to initialize `npm`?
```
npm init
```
`npm init -y` can be used to skip the setup step, `npm` takes care of it and creates the `package.json` json file automatically , but without configurations.
>### Note : 
>`npm` does not stand for **node package manager** but everything else.


## Que. What is **Parcel/Webpack**? Why do we need it?
`Parcel and Webpack` are both popular `bundlers`, but they have different strengths and weaknesses. `Parcel` is known for being easy to use and having a fast build time. `Webpack` is more powerful and flexible, but it can be more complex to configure.
>### Que. What is bundler?
> `A bundler is a development tool` that combines many JavaScript code files into a single one that is production-ready loadable in the browser.

>### why do we need a bundler? 
> `Bundlers` make it easier to develop and deploy JavaScript applications by improving performance, code splitting, minification, optimization, and dependency management.

### Parcel Features:
* HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
* File watcher algorithm - made with C++
* Minification
* Cleaning our code
* DEV and production Build
* Super fast building algorithm
* Image optimization
* Caching while development
* Compresses
* Compatible with older version of browser
* HTTPS in dev
* Port Number
* Consistent hashing algorithm
* Zero Configuration
* Automatic code splitting

### installation commands:
- Install:
```
npm install -D parcel
```
`-D` is used for development and as a development dependency.

- Parcel Commands :
    - For development build:
    ```
    npx parcel <entry_point> 
    ```
    - For production build :
    ```
    npx parcel build <entry_point> 
    ```

## Que. What is **.parcel-cache**?
1.parcel-cache` is a directory created by Parcel, a javascript bundler, to store information about our project when parcel builds it. 
This information includes the results of parsing our code, the results of dependency resolution, and the contents of our build output.


## Que. What is `npx`?

`npx` stands for `Node Package eXecute`. It is a command-line tool that allows us to run any JavaScript package available on the npm registry without having to install it first. 
It comes with the npm, when you installed npm above 5.2.0 version then automatically `npx will installed`.

## Que. What is difference between `dependencies` vs `devDependencies`?

`Dependencies` should contain library and framework in which our app is built on, needs to function effectively. such as Vue, React, Angular, Express, JQuery and etc. 
`DevDependencies` should contain modules/packages a developer needs during development.
such as, `parcel, webpack, vite, mocha`.
`These packages` are `necessary only while we are developing our project`, not necessary on production.
To save a dependency as a devDependency on installation we need to do, 
```
npm install --save-dev
```
instead of just,
```
npm install --save
```


## Que. What is `Tree Shaking`?
`Tree shaking` is process of removing the unwanted code that we do not use while developing the application.
In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.


## Que. What is `Hot Module Replacement`?
`Hot Module Replacement (HMR)` is a feature that allows us to see code changes in the browser without having to refresh it, allowing us to preserve the state of our front-end application.

`HMR` works by injecting a small amount of code into the running application that allows it to communicate with the development server. When we make a change to our code, the development server will send the updated code to the browser, which will then replace the old code without refreshing the page.

`HMR` is a powerful feature that can significantly speed up `front-end development`.
>### Hint:-
>If you're looking for a way to speed up your `front-end development`, I highly recommend using Hot Module Replacement.



## Que. List down your favorite `5 superpowers of Parcel` and describe any 3 of them in your own words.
A: `5 superpowers of Parcel`:
* `HMR (Hot Module Replacement)` - adds, or removes modules while an application is running, without a full reload.
* `File watcher algorithm` - it quickly detect changes to our source files. This means that our application will be rebuilt and reloaded as soon as we make a change, without having to wait for Parcel to rescan the entire project.
* `Minification` - Minification is the process of minimizing code and markup, which can significantly reduce the size of our application. This can improve the performance of our application and make it load faster for users.
* `Image optimization`- It optimize our images & it can reduce the file size of our images and make them load faster for users.
* `Caching while development`- It cache our application's assets while we are developing, which can speed up the build process. It especially useful when you are working with large or complex applications.


## Que. What is `.gitignore`? What should we `add and not add` into it?
`A .gitignore file` is a text file that tells Git which files and directories should be ignored when tracking changes to our project. This is useful for excluding temporary files, build artifacts, and other files that we don't want to be included in our commits.
`package-lock.json` should `not add` into your `.gitignore` file.

The entries in this file can also follow a matching pattern.
```
* is used as a wildcard match
/ is used to ignore pathnames relative to the .gitignore file
# is used to add comments to a .gitignore file
```
This is an example of what the .gitignore file could look like:
```
# Ignore Mac system files
.DS_store

# Ignore node_modules folder
node_modules

# Ignore all text files
*.txt

# Ignore files related to API keys
.env

# Ignore SASS config files
.sass-cache
```


## Que. What is the difference between `package.json` and `package-lock.json`?
* `package.json`:
    * This file is mandatory for every project
    * It contains basic information about the project
    * Application name/ version/ dependencies/ scriptss

* `package-lock.json`:
    * This file is automatically generated for those operations where npm modifies either the node_module tree or package-json.
    * It is generated after an `npm install`
    * it also allows to go back to the past version of the dependencies without actual
    ‘committing the node_modules folder.
    * It records the exact versions of the dependencies that were installed when our project was last built.
    * It ensures that our project will always have the same dependencies, regardless of which environment it is running in.

* **~** or **^** in `package.json` file :
These are used with the versions of the package installed.

For example  in `package.json` file:
```
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```

* `Tilde( ~ )` : `Approximately equivalent to version`, will update you to all future patch versions, without incrementing the minor version.
* `Caret( ^ )` : `Compatible with version`, will update you to all future minor/patch versions, without incrementing the major version.

> If none of them is present, that means only the version specified in `package.json` file is used in the development.


## Que. Why should I not modify `package-lock.json`?
 `package-lock.json` file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

## Que. What is `node_modules` ? Is it a good idea to push that on git?   
 The `node_modules`folder is a directory created by `npm install` or `yarn install` that contains all the packages installed locally from `package.json`
 This folder contains all the project's downloaded dependencies.
 Reinstalling an existing package will not require a download from the Internet because `node_modules`also acts as a cache.
`Don't push node_modules`in github because it contains lots of files(more than 100 MB), it will cost you memory space.


## Que. What is the `dist` folder?
The `/dist` folder is a common folder name used in software development to store the compiled or minified version of a project's source code. The name
`dist` stands for "distributable", as the files in this folder are ready to be distributed to users.
In web development, the `/dist` folder typically contains the minified JavaScript, CSS, and HTML files that make up a web application.These files are typically smaller and faster than the original source code, which makes them ideal for production environments.

## Que. What is `browserslist`?
 `Browserslist` is a tool that helps us to specifying which browsers should be supported in `our frontend app` by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

 For example, you could use the following query to target the latest two versions of Chrome and Firefox:
 ```js
 > 0.25%, last 2 versions
 ```
----
### Que. What is Transitive Dependency
* A transitiv dependency in React is a dependency of a package that you depend on.
* For example, if our React application depends on the `react-router` package, then
`react-router` depends on the `react-dom`
package. This means that the
`react-dom`package is a transitive dependency of our React application, even though we didn't explicitly list it in our
`package.json`file.

* Transitive dependencies can be a bit tricky to manage, because they can introduce security vulnerabilities or compatibility issues into our application. 
* For example, if the `react-dom` package has a security vulnerability, then our React application will be vulnerable to attack even if we haven't updated the
`react-dom`package ourself.
