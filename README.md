# SWAPI-Helper
A refactoring of cfjedimaster's Star War's API wrapper using Axios and jQuery

Please refer to the Star Wars API to learn about the API itself and how to work with it
http://swapi.co/

Please refer to cfjedimaster's SWAPI-Wrapper for further instructions on how to use the orginal functions and how I have improved on them
https://github.com/cfjedimaster/SWAPI-Wrapper

## How To Use
* Copy the swapiHelper.js in the lib folder and simply include it into your projects directory
* Use the requestGenerator function by passing in different paramenters.
* To get a single record from the Star Wars API, simply use requestGenerator('one', 'path', id, function(data){console.log(data);});
 * requestGenerator('one', 'films', 1, function(data){console.log(data);}); 
 * Makes a request to http://swapi.co/api/films/1/
* To get multiple records requestiGenerator('many', 'path', function(data){console.log(data)});
 * requestGenerator('many', 'films', function(data){console.log(data);}); 
 * Makes a request to http://swapi.co/api/films/
 * By default only upto 10 results are returned at a time, use the page parameter to specify which page to request (do not use 0)
  * requestGenerator('many', 'people', 2, function(data){console.log(data);}); 
  * Makes a request to http://swapi.co/api/people/?page=2
* Use the request(url) function to easily make requests to URL's from the response data
* Look in the index.html file for further clarification

### Why You Should Use
* The originial example I found on the Star Wars API homepage was brilliant but even as the author admits, not optimized.
* After playing around I decided to simplify the initital get request by using Axios HTTP client
* Then I decided to use the arguments object to turn two seperate functions and over a dozen aliases to one function


### TO-DO
* Create a minified version of the SWAPI Helper
* Turn SWAPI Helper into an npm package
