var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

function getAndPrintHTML (options) {
  var buffer = "";
    https.get(requestOptions, function (response) {
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      buffer += data;
      console.log(buffer)
    });
    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
}

getAndPrintHTML();

//Considerations
// What kind(s) of variable could you buffer your data with?
// Is there a preferable type? If so, what makes it preferable?

// This function should use a buffering technique to append
// each chunk of data to a variable as it is received, and then
// console.log the data once all of the data has been received.
// Buffering in this context means the technique you've
// used before (usually in loops or conditionals) of
// creating an empty variable and adding data to it.