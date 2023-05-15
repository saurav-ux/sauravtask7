# Building a REACT Application that fetches data from given API
# Vite Installation Guide for React, Redux, and React-Redux

 This guide will walk you through the installation process of Vite with React, Redux, and React-Redux for building modern and efficient web applications.  Vite is a build tool that provides fast and optimized development setups for JavaScript frameworks.

# Prerequisites

Before you begin, make sure you have the following installed on your machine:
1. Node.js (v12 or above)
2. npm (Node Package Manager)

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

## This will compile your application and start the development server. You can access your application at http://localhost:3000.


#  Testing 
 1. Install Selinium IDE from Crome Extention
 2.  Make New Project
 3.  Make New Tese Case
 4.  Start Recording
 5. Perform Task on your Webiste
 6.Stop recording
 7.Run the Test
 

Snapshort of Project
1. Create Post
![image](https://github.com/saurav-ux/sauravtask7/assets/72144149/5016ab12-dbd0-4862-b2aa-8d7a32397cea)
2. All Posts
![image](https://github.com/saurav-ux/sauravtask7/assets/72144149/2c5f3da3-bc1d-45ce-a780-98b14936d4c1)
![image](https://github.com/saurav-ux/sauravtask7/assets/72144149/1d1bce0d-6d48-4439-8579-af232bf7880b)
3. Search functionality
![image](https://github.com/saurav-ux/sauravtask7/assets/72144149/65e299a4-ad6b-45fe-a1b2-74ef2582a293)


