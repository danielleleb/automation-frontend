# CS Automation Code Challenge

### BACKEND
To create this application, I began by reading the documentation of the Kraken API. After reading the documentation and the description of the challenge, I used Postman to make calls to the API - this, along with the documentation, allowed me to gain more understanding of the data provided.

To create the backend for my application, I created a server with Express.js and used Helmet.js for extra security protections. Additionally, I also the express-rate-limit package to limit the allowed number of calls to the server (todo: Implement an error message for users when the limit has been exceeded - it currently displays the loading page). 

In addition to using Helmet.js, I also chose to make all calls to the Kraken API (as well as to the Express server) using POST methods, rather than GET. I chose to do this to prevent potentially valuable information from being displayed in the URL. 

While I used the Kraken rest API to complete this challenge, I think using Web Sockets would have been more performant, specifically regarding the numerous calls to the ‘Ticker’ API. Due to the fact that I only had six hours to complete the challenge, I chose to use the rest API, as am I more comfortable, and have more experience, with that format, so I thought this would allow me to make better use of my limited time. 

### FRONTEND
Regarding the frontend, I chose to use Redux for managing the state. I debated whether or not Redux was truly necessary for this app, as the components aren’t too deeply nested. Similarly as what I previously said about Web Sockets vs the rest API, I think using the React Context API would have been a preferable option for this application. Though as I have more experience, and am more comfortable, with Redux, I chose to use it instead due to time constraints. 

One thing I would like to improve within this application is the accuracy of the timing of each ticker API call. I’m currently using setTimeout to dispatch the call to the ticker API. To improve the accuracy, I would like to utilize the ‘Get server time’ endpoint.  

The application is currently updating the current value of the pair every minute, had I had more time, I would have implemented options that would allow the user to choose the frequency of calls to the ticker endpoint.

#### Additional todos/improvements:

 - Use Typescript (or Flow)
 - Implement redux-logic
 - Implement better loading page for when a new pair is selected
  - Use a nicer dropdown menu 
### Instructions to run the application:
The application has been deployed and can be found here: https://shielded-stream-86773.herokuapp.com/ (it's hosted on Heroku's free tier, so it will take some extra time to "wake up" the application on first load, but will load normally after the first load). 

### To install the project locally:
- Clone this (frontend) repository and run `npm install`
- Clone the server repository (https://github.com/danielleleb/automation-backend) and run `npm install`
- In the frontend repository, line 19 of `package.json` should be changed to `"start": "PORT=4200 react-scripts start",` (todo: create a script to automate this to improve experience for other developers)
- Run the frontend repository using `npm run start`
- Run the backend repository using `npm run start`
- The site should now be visible at `localhost:4200`