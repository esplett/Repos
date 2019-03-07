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
                   album: "Woodstock 1952"},

            },

  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    },
             },

    printPlaylists: function() {
      for(var pl in this.playlists){
        var currentPlayList = this.playlists[pl]
        console.log(currentPlayList.id + ": " + currentPlayList.name + " - " + currentPlayList.tracks.length + " tracks");
      }
    },
    printTracks: function () {
      for (var tl in this.tracks) {
        var currentTrackList = this.tracks[tl]
        console.log(currentTrackList.id + ": " + currentTrackList.name + " by " +
        currentTrackList.artist + " (" + currentTrackList.album + ")")
      }
    },
    printPlaylist: function (playlistId) {
      var currentPlayList = this.playlists[playlistId]
      console.log(currentPlayList.id + ": " + currentPlayList.name + " - " + currentPlayList.tracks.length
      + " tracks")
        for (i = 0; i < currentPlayList.tracks.length; i++) {
        console.log(currentPlayList.tracks[i] + ": " + this.tracks[currentPlayList.tracks[i]].name
        + " by " + this.tracks[currentPlayList.tracks[i]].artist + " ("
        + this.tracks[currentPlayList.tracks[i]].album + ")")
      }
    },
    // adds an existing track to an existing playlist
    addTrackToPlaylist: function (trackId, playlistId) {
      this.playlists[playlistId].tracks.push(trackId);
    },

   uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    },

     // adds a track to the library
            addTrack: function (name, artist, album) {
                        var trackId = library.uid();
                        this.tracks[trackId] = {
                        id: trackId,
                        name: name,
                        artist: artist,
                        album: album
                        }
                  },
          addPlaylist: function (name) {
                    var playlistId = library.uid();
                    var trackId = library.uid();
                    this.playlists[playlistId] = {
                      id: playlistId,
                      name: name,
                      tracks: trackId,
                      }
                },

}

library.printPlaylists()
library.printTracks()
library.printPlaylist("p01")
library.addTrackToPlaylist("t03", "p01");
console.log(library.playlists)
library.addTrack("ILoveCodingLOL", "Esther Splett", "Stupid Face")
library.printTracks()
library.addPlaylist("Tainted Love")
library.printPlaylists()



// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {

// }