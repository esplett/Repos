var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
    }
  };

  request(options, function(err, res, body) {
    //parse data into an object
    var data = JSON.parse(body);
      cb(err, data);
        // console.log(data.avatar_url)
  });
}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  //instead of console logging results
  //loop over array and print each avatar URL
  for (i = 0; i < result.length; i++){
    console.log(result[i].avatar_url)
  }
});


