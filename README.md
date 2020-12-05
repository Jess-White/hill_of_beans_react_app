## Welcome to Hill of Beans!

Here is a link to the deployed version:
https://hill-of-beans-db.herokuapp.com/

Here are some screenshots from the deployed version:

# Frontpage:

<img 
  src="./public/screenshot_one.png"
  alt="screenshot one - frontpage"
/>

# About:

<img 
  src="./public/screenshot_two.png" 
  alt="screenshot two - about modal"
/>

# Search Results:

<img 
  src="./public/screenshot_three.png"
  alt="screenshot three - search results"
/>

# Movie Info:

<img 
  src="./public/screenshot_four.png" 
  alt="screenshot three - more information modal"
/>

# Hill of Beans is a movie search app built on a React frontend and Rails backend. 

Users can search movies by title and see:

- Title
- Poster (image url)

Then they can view results and click on a modal to view the following information: 

- Year
- Rating
- Runtime 
- Genre
- Director
- Actors
- Plot
- Awards

After looking through the movie information, users can add their rating by clicking on a "thumbs up" or "thumbs down" button. The app includes functions that save these ratings on a rails backend, the repo for which can be found here:

https://github.com/Jess-White/hill_of_beans_rails_db

The app displays data from RapidApi's Movie Database (IMDB Alternative), which can be found here: 
https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative

This app utilizes both the search endpoints (to get a set of results) and the find by endpoints (to take each entry in the set of results and append additional data).

All endpoints are readily available in the RapidAPI documentation, and all information is in the first layer of the response data. I used axios, but RapidAPI includes a number of other options.

Here is the documentation for axios:

https://github.com/axios/axios

Here is some additional info on axios, which I found useful when I was trying to compare axios and fetch:

https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/

When I moved some of the API call functionality to the backend, I used httparty:

https://github.com/jnunemaker/httparty

This tutorial from RapidAPI walks you through building a search in React using RapidAPI; it came in handy when I was trying to figure out how to use headers and parameters in my functions:

https://rapidapi.com/blog/imdb-api-javascript-react/

# Local Setup

You will need:

backend:
- Ruby 2.6 +
- Rails 6 +

frontend:
- React 17 +
- React-bootstrap 1.4 + 

backend:
### `git clone https://github.com/Jess-White/hill_of_beans_rails_db`

frontend:
### `git clone https://github.com/Jess-White/hill_of_beans_react_app`

local start:

backend:
### `rails s`

frontend: 
### `npm start`

(These are set to run on localhost:3000 and localhost:3001 respectively)

# Additional Resources:

# Rails

Here's some basic information on building a rails database:

https://guides.rubyonrails.org/v2.3/getting_started.html

# React-Bootstrap

For styling, I used react-bootstrap because it's straightforward and mobile-friendly. Documentation can be found here:

https://react-bootstrap.github.io/

# Create React App (npm)

I used this resource for Create React App:

https://create-react-app.dev/docs/getting-started

# Available Scripts:
In the project directory, you can run:

### `npm start`
Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode. See the section about running tests for more information.

### `npm run build`
Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. If necessary, classnames and function names can be enabled for profiling purposes. See the production build section for more information.

Your app is ready to be deployed! See the section about deployment for more information about deploying your application to popular hosting providers.

### `npm run eject`
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) into your project as dependencies in package.json. Technically, the distinction between dependencies and development dependencies is pretty arbitrary for front-end apps that produce static bundles.

In addition, it used to cause problems with some hosting platforms that didn't install development dependencies (and thus weren't able to build the project on the server or test it right before deployment). You are free to rearrange your dependencies in package.json as you see fit.

All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.