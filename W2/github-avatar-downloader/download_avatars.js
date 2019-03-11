var request = require('request');
var fs = require('fs');
var secrets = require('./secrets.js')

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${secrets.GITHUB_TOKEN}`
    }
  };
  request(options, function(err, res, body) {
    //parse data into an object
    var data = JSON.parse(body);
      cb(err, data);
  });
}

function downloadImageByURL(url, filePath) {
  request.get(url)
    .on('error', function (err) {
      throw err;
    })
    .on('response', function (response) {
      console.log('Response Status Code: ', response.statusCode);
      console.log('Download complete.');
    })
    .pipe(fs.createWriteStream(filePath));
}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  //loop over array and print each avatar URL
  for (user of result) {
    downloadImageByURL(user.avatar_url, `./avatars/${user.login}.jpg`)
  }
});



