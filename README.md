# CS463 Personal Website

## Project Description

This is my (Timofey Shichalin) final project for the class CS 463 (Introduction to Web Development) at Portland State University. It is a multi-page website. It introduces me and displays some of my past experience and projects. You can see the site live at [https://timshicha.github.io/cs463-personal-website/](https://timshicha.github.io/cs463-personal-website/).

## Frameworks, Libraries, and other Resources Used

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Node dependencies added (on top of React defaults):

- `gh-pages`
  Resources used:
  - [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - [https://icons.getbootstrap.com/](https://icons.getbootstrap.com/)

## Setting Up

This project requires you have Node installed on your machine. Node will allow you to run `npm` commands. The necessary `npm` commands are outlines below.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the necessary dependencies (listed in `package.json` file). This will create a `node_modules` directory.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

(Not yet set up) Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run deploy`

Builds the project and pushes the build to branch `gh-pages`. To create a commit message on the deployment, use `npm run reploy -m "message"` instead.

## Deployment

To deploy your own version of this project on GitHub, you need to clone this repository and create your own remote repository. Open the file `package.json` and edit the homepage (line 4) to the URL you'll be deploying the project from. If you'll be deploying on GitHub, use `https://<YOUR-GITHUB-USERNAME>.github.io/<YOUR-REPOSITORY-NAME>/`. Afterwards, run `npm run deploy` (see above). Then, go to your repository, click Settings, click Pages, and deploy from the `gh-pages` branch. Any time you want to deploy your updated project, using `npm run deploy` will update the deployment.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
