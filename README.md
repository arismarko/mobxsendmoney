# Phonecard - React/Mobx

# Getting started
For this example I used React with Mobx and for the testing Jest.

Once you clone run:

$ npm install

Then run: $ npm start

The application will run on localhost:3000

If you want at any point to run the tests please run: $ npm run test

# Structure
The main development location is the src directory:

-  ```src``` The main source directory
-  ```App``` has the store from mobx that passes it to the provider and then it is available to the containers
-  ```containers``` Top app layers only one for this example the phoneContainer that observes changes to the phoneStore - once changes come available it sends the to the components
-  ```components``` Reusable components receive data and dont directly talk to the store only receive data from the containers
-  ```store``` The store of the app for this it has a mapper that gets the data from a json file and transforms to a more readable version and then passes it to an observable.

It has some methods for setting the selected phone variant. 

index.jsx is setting up the main app container.

The app container is loading all the other containers using the latest router and loads the phoneStore

All spec files are within actions, container, and each component.

# Deploying
npm run build

# Testing 

npm run test
