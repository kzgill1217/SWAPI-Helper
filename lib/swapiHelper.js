var swapiHelper = function () {

    /* The root URL of the Star Wars Api */
    var rootURL = 'http://swapi.co/api/';

/*  Makes request to Star Wars Api via axios HTTP 
    Parameters are a url and stringifies the response to
    a variable usable in callbacks */
function request(url, cb) {

    // Getting the response from a given url parameter
    axios.get(url)
        .then((response) => {
            cb(response);
        })
        // Catches any errors
        .catch((err) => {
                console.log(err);
            });
  }

  // Requests for a single response (takes id as a parameter in the path and a callback)
  function singularRequestGenerator(path) {
    return function(id, cb) {
      request(rootURL + path + '/'+id+'/', cb);
    };
  }

  // Requests for multiple responses with different aruments including page number and a callback
  function pluralRequestGenerator(path) {
    return function() {
      if(arguments.length === 1) {
        request(rootURL + path + '/', arguments[0]);
      } else {
        request(rootURL + path + '/?page=' + arguments[0], arguments[1]);
      }
    };
  }

  // All of the aliases that can be used to request data
  return {
        request,
        getPerson:     singularRequestGenerator('people'),
        getPeople:     pluralRequestGenerator('people'),
        getFilm:       singularRequestGenerator('films'),
        getFilms:      pluralRequestGenerator('films'),
        getPlanet:     singularRequestGenerator('planets'),
        getPlanets:    pluralRequestGenerator('planets'),
        getSpecies:    singularRequestGenerator('species'),
        getAllSpecies: pluralRequestGenerator('species'),
        getStarship:   singularRequestGenerator('starships'),
        getStarships:  pluralRequestGenerator('starships'),
        getVehicle:    singularRequestGenerator('vehicles'),
        getVehicles:   pluralRequestGenerator('vehicles')
  };

}();