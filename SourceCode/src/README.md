# Vite Installation Guide for React, Redux, and React-Redux

# This guide will walk you through the installation process of Vite with React, Redux, and React-Redux for building modern and efficient web applications.  Vite is a build tool that provides fast and optimized development setups for JavaScript frameworks.

# Prerequisites

# Before you begin, make sure you have the following installed on your machine:
  Node.js (v12 or above)
  npm (Node Package Manager)

# Steps

1. Create a new project folder and navigate into it
   mkdir my-app
   cd my-app
2. Initialize a new Node.js project:
   npm init -y
3. Install Vite globally using npm:
   npm install -g create-vite
   You will be prompted to choose a project template. Select the "react" option.
4. Once the project is created, navigate into the project directory:
   cd my-app
5. Install Redux and React-Redux packages:
   npm install redux react-redux
7. Create a new directory called "redux" inside the "src" folder:
   mkdir src/redux
8. Inside the "redux" folder, create the following files:

    actions.js: Define Redux actions.
    reducers.js: Create Redux reducers.
    store.js: Configure the Redux store.

9. Open the src/index.js file and remove the default code. Replace it with the following:
   import React from 'react';
   import ReactDOM from 'react-dom';
   import { Provider } from 'react-redux';
   import store from './redux/store';
   import App from './App';

   ReactDOM.render(
     <Provider store={store}>
       <App />
     </Provider>,
     document.getElementById('root')
   );

    This code sets up the Redux store and wraps the root component (App) with the Provider component from React-Redux.
10. Open the src/App.js file and update it with your React application code, including Redux actions and reducers.
   
11. Start the development server:
     npm run dev

# This will compile your application and start the development server. You can access your application at http://localhost:3000.


#  Testing 
   Install Selinium IDE from Crome Extention
   Make New Project
   Make New Tese Case
   Start Recording
   Perform Task on your Webiste
   Stop recording
   Run the Test