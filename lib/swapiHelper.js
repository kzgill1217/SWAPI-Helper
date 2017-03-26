var swapiHelper = function () {

    /* The root URL of the Star Wars Api */
    var rootURL = 'http://swapi.co/api/';

/*  Makes request to Star Wars Api via axios HTTP 
    Parameters are a url and parses the response to
    a variable usable in callbacks */
function request(url, cb) {

    // Getting the response from a given url parameter
    axios.get(url)
        .then((response) => {
          console.log(url);
            cb(response);
        })
        // Catches any errors
        .catch((err) => {
                console.log(err);
            });
  }

  function requestGenerator(){
    let path = arguments[1];

    switch(arguments[0]) {
      case 'one': 
        let id = arguments[2];
        let cb = arguments[3];
        request(rootURL + path + '/'+id+'/', cb);
        break;
      case 'many':
        if(arguments.length === 3) {
            let path = arguments[1];
            let cb = arguments[2];
            request(rootURL + path + '/', cb);
          } else if(arguments.length === 4){
              let path = arguments[1];
              let cb = arguments[3];
              request(rootURL + path + '/?page=' + arguments[2], cb);
          } else {
            console.log('requestGenerator incorrect many arguments error');
          }
          break;
      default:
        console.log('requestGenerator error at arguments[0]'); 
    }
  }

  return {
        request,
        requestGenerator
  };

}();