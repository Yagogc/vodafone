#### Demo: [vodafone.yagogc.com](https://vodafone.yagogc.com)

## Stack

The stack choosed for this project is:

* JS Framework: [React](https://reactjs.org/).
* CSS Preprocessor: [Styled Components](https://www.styled-components.com/) (CSS-in-JS library).

The main reasons to choose React is the hight reusable componets, a clean abstraction and thje fast rendering through the Virtual DOM.

And like react the use of reusable components is reason behind the use of Styled Components.

The project was created with [Create React App](https://github.com/facebookincubator/create-react-app).
## Table of Contents

- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Supported Browsers](#supported-browsers)
- [Extra Dependencies and Polyfills](#extra-dependencies-and-polyfills)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

## Folder Structure

After creation, your project should look like this:

```
vodafone/
	README.md
	node_modules/
	package.json
	yarn.lock
	public/
		index.html
		favicon.ico
		icon.png
		manifest.json
		images/
			desktop/
	src/
		App.js
		index.js
		/components
```

## Supported Browsers

This project was tested with:

- Chrome (Version 64) ✔️
- Chrome for Android (Version 64) ✔️ (PWA Compliant)
- Firefox (Version 58) ✔️
- IE 11 ✔️
- Edge 16 ✔️
- Safari 11 ✔️
- IOS Safari 11 ✔️
## Extra Dependencies and Polyfills

Besides the dependencies of React (via [Create React App](https://github.com/facebookincubator/create-react-app)), tis project uses the followings:<br>

* [Babel Polyfill](https://www.npmjs.com/package/babel-polyfill): Polyfills  to support older browsers (eg: IE11).
* [Styled Components](https://www.styled-components.com/): CSS-in-JS library.

