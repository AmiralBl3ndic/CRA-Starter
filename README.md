# AmiralBl3ndic/CRA-Starter

This repository holds my go-to preset when creating a new React app.

## What does this starter includes?

This starter comes with the following:

- `node-sass` which enables you to use *SASS* and *SCSS*.
- `react-app-rewired` which enables you to override some default `create-react-app` configuration 
without ejecting.
- `eslint` configured to enforce an AirBnB code style.
- `react-helmet` to help you change the meta properties of the pages being rendered.
- `Tailwind CSS` setup and installed for direct use on the project.

Because this is only a template started, you should always try to update the dependencies.

I personnaly use `yarn`, but you can use `npm` or `bower` just the same.

## Folder structure

The folder structure is inspired by Angular and includes the defaults from create-react-app. 
Hence this section focuses solely on the `src` folder.

### `components`

This folder contains the React components along with their styles, each in a sub-folder named after its component.

Example:
```
src/components/
|- index.js
|- App/
|  |- App.jsx
|  |- App.scss
|  |- App.test.js
|- RandomComponent/
|  |- RandomComponent.jsx
|  |- RandomComponent.scss
|  |- RandomComponent.test.js
```

As you can see, the structure is heavily inspired by Angular.

It happens that a component might need a bit of refactoring and to include sub-components. 
If these components should only be used in the parent component and should not be shared, rather than creating 
a new component directly in `src/components`, you should nest it under the parent's directory, making its access 
easier and more logical. It is React though, nothing prevents you from doing what you want.

All reusable components should be imported then exported in `src/components/index.js`:

Example with the above directory structure
```javascript
import App from './App/App';
import RandomComponent from './RandomComponent/RandomComponent';

export {
	App,
	RandomComponent
};
```

Doing so will enable other components to import every component without knowing the exact path by doing that:
```javascript
import { RandomComponent } from '@/components';
```

This is done thanks to the `jsconfig.json` and `config-overrides.js` files that allow both your editor/IDE and 
React to associate the `@` symbol to the `src` directory.

This folder is made acceessible with the `@/components` or `@components` paths.

### `pages`

Just like the `components` directory, this directory contains React components, following the same logic and 
structure. However, this folder should only contain the components that are responsible for holding a *page*: 
a compound of different components presented together as a classic HTML page would do.

This folder is made accessible with the `@/pages` or `@pages` paths.

### `style`

Whenever you need to include styling that is not directly related to a specific component, you should put the 
styling files in this directory and import them where the styles need to apply.

This folder is made accessible with the `@/style` or `@style` paths.

### `assets`

As its name suggests, this folder should contain assets like PDFs or other static files.

This folder is made accessible with the `@/assets` path.

### `assets/images`

By default, the `src/assets` folder contains an `images` subdirectory that should contain image files and which is 
directly accessible via the `@images` path.

# Original Create-React-App README.md


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
