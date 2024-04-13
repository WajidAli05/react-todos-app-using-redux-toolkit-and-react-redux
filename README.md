#Complete Step by Step Guide

##Author: Wajid Ali

##Create React App
1. npx create-react-app redux-todos-app
**NOTE: Replace "redux-todos-app" with the name of the application according to your preference**

2. cd redux-todos-app

##[Install Tailwind CSS for Quick Styling](https://tailwindcss.com/docs/installation)
1. npm install -D tailwindcss
2. npx tailwindcss init

It will create **tailwind.config.js** file in the root of the project. Open this file and the following line to **contents**:

"./src/**/*.{html,js}"


###Configure index.css file
Add the following lines to your **index.css** file:

@tailwind base;
@tailwind components;
@tailwind utilities;


###Install **tailwind css intellisense** extention from extensions tab in VS code
This extension will help you in selecting tailwind css classes directly by typing in VS code as it provides suggestions of the Tailwind css classes.

Now you are ready to use Tailwind css in your project!

##Redux
###Create slices
1. Inside **src** folder, create a new folder named **slices**.
2. Create a new file named **todosSlice.js** in **slices** folder.


###Create redux store
1. Inside the **src** folder create a new folder named **store**.
2. Create a new file named **store.js** inside **store** folder
3. Register the slices created in the store

###Connect React application to the Redux store
1. Import **Provider** from **react-redux** inside **index.js** file
2. Import **store** inside **index.js** file
3. Wrap **App** component with **Provider** and add **store = {store}** as a parameter to the **Provider**.

*Congrates! You have created your first React application using Redux Toolkit and React Redux
