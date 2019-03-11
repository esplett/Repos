var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};


function printUpperCase(html) {
  getHTML(requestOptions, function (data) {
  console.log(data.toUpperCase())
})


}

getHTML(requestOptions, printUpperCase)