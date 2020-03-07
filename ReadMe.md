# Roadreview backend

This is the backend service for road review 

## Running the app

Clone the project and run the following commands


**Installing dependencies**

    $ npm install
    
**Starting the server**

    $ npm start
    
    
The server listen on port ```3000``` by default. 

## About the structure

``` 
index.js <-- entry point for node
config <-- config files goes here for easy mangement using npm-config
| - default.js
| - development.js
| - staging.js
src <-- folder for the source code
| - main <-- all js files for the express server
  | - router.js 
  | - express.js
  | - ...
| -  components <-- all the api resources belong here  
  | - <resource>
    | - route.js <-- specific routing for this resource e.g. /user/all, /user/auth etc.
    | - controller.js <-- controller for this resource, map endpoints to functions
    | - user.service.js <-- controller should call services to perform business logic / db access
  | - ...    
| - utils <-- utilities functions goes here
	| - ...
tests
| - functions
	| - <resource>-test.js
	| - ...
```	


### Component

Each resource in component should have only exactly **3** ``js`` files. ```controller.js```, ```routes.js```, ```user.service.js```


### Linting 

```npm run lint```




## Testing 

Testing frameworks used here is mocha and chai. 



Tests are to be written in ```tests/``` directory.

```functions``` should be used to test functions (i.e. any services)

Tests file should be named <component-under-test>-test.js


```dummies``` should be used to put dummy data (sample booking, mock API response, etc)

```rest``` should be used to put tests to endpoint testing


**Running Tests**

    $ npm test
    
    
    
