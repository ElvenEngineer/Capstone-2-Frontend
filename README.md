## News app: 
api: https://newsapi.org/docs

What the site does: The function of the site is to pull all the news articles from multiple sources and provide the latest news.

Features implemented and why:
1. categories: the user can see the top and latest news based on category because categories improve the user experience. 
2. save articles: the user can save articles to read later because sometimes people are in a rush and don't have time to read now so they want to read it later. 
3. login and authentication: this part creates a new user so that each user can have their own unique saved list of articles. this includes the sql databases and association tables. 
4. search bar: this is where the user can type a keyword and find all the relevant articles because every news site should have a search bar for convenience. 
5. lazy loading: this is a feature which allows the user to load about 30 search results per page so it doesn't overwhelm the user's browser. And as the user scrolls through the search results, the new search results will automatically populate. 

The tests for the site can be found inside the folder where the tested files are located. To run the tests from ubuntu you would need to navigate to the folder with the tests. Ensure that the tests are installed. We are using jest for this. Run this command: npm test.

## User Flow Overview
 This user flow will guide you through the process of creating an account, loging in, accessing the latest top news, navigating through the categories, using the save to read later feature, and loging out. 

1. **Logging In**
   - Navigate to the login page.
   - Enter your username and password.
   - Click the "Log In" button.

2. **Browsing Categories**
	- use the top navigation bar to go to different categories
	- you can use a search bar to find articles with specific keywords
3. **Adding articles to read later**
	- for every article you can see a button which gives you an ability to add the article to saved list
	- navigate to the saved article category to see all the saved articles for logged in user
4. **Deleting articles from saved list**
	- navigate to the read later category
	- for all saved articles you will have a button that allows you to delete the article from the saved list


### Technology stack: ###
1. Node.js
2. Express.js
3. React.js
4. HTML and CSS
5. Twitter Bootstrap
6. JavaScript

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
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

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
