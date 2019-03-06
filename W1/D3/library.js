var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


printPlaylists = function () {
  for(var pl in library.playlists){
    var currentPlayList = library.playlists[pl]
    console.log(currentPlayList.id + ": " + currentPlayList.name + " - " + currentPlayList.tracks.length + " tracks");
    }
}

printPlaylists()

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var tl in library.tracks) {
    var currentTrackList = library.tracks[tl]
    console.log(currentTrackList.id + ": " + currentTrackList.name + " by " +
      currentTrackList.artist + " (" + currentTrackList.album + ")")
  }
}

printTracks()

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  for(var pl in library.playlists){
    var currentPlayList = library.playlists[pl]
    console.log(currentPlaylist.id + ": " + currentPlayList.name + currentPlayList.tracks.length
      + " tracks")
  }
  // for (var tl in library.tracks) {
  //   var currentTrackList = library.tracks[tl]
  // }
  // console.log(currentPlayList.id + ": " + currentTrackList.name + " by " +
  // currentTrackList.artist + " (" + currentTrackList.album + ")")
}

p01.printPlayList()

// adds an existing track to an existing playlist

// var addTrackToPlaylist = function (trackId, playlistId) {

// }


// generates a unique id
// (use this for addTrack and addPlaylist)

// var uid = function() {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// }


// adds a track to the library

// var addTrack = function (name, artist, album) {

// }


// adds a playlist to the library

// var addPlaylist = function (name) {

// }


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {

// }