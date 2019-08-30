require("dotenv").config();

if (process.argv[2] == "concert-this") {
    //Setting artist name for API URL
    var artist
    if (process.argv.slice(3).join(' ') == undefined) {
        artist = "Jack Johnson"
    } else {
        artist = process.argv.slice(3).join(' ')
    }
    //Setting API URL 
    var apiKey = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp&date=all"
    // console.log(apiKey)
    var request = require('request');
    request(apiKey, function (error, response, data) {
        console.log(JSON.parse(data)[0].venue.name);
        console.log(JSON.parse(data)[0].venue.city + " " + JSON.parse(data)[0].venue.country);
        console.log(JSON.parse(data)[0].datetime);
    });
} else if (process.argv[2] == "spotify-this-song") {
    console.log(process.argv)
    var song = process.argv.slice(3).join(' ')
    var Spotify = require('node-spotify-api');
    var keys = require("./keys.js");
    var spotify = new Spotify(keys.spotify);
    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(JSON.stringify(data.tracks.items[0].album.artists[0].name));
        console.log(JSON.stringify(data.tracks.items[0].name));
        console.log(JSON.stringify(data.tracks.items[0].album.href));
        console.log(JSON.stringify(data.tracks.items[0].album.name));
    });
} else if (process.argv[2] == "movie-this") {
    //Setting movie name for API URL
    var movie
    if (process.argv.slice(3).join(' ') == undefined) {
        movie = "Mr. Nobody"
    } else {
        movie = process.argv.slice(3).join(' ')
    }
    var request = require('request');
    request('https://www.omdbapi.com/?t=' + movie + '&y=&plot=short&apikey=trilogy', function (error, response, data) {

        console.log("Title: " + JSON.parse(data).Title);
        console.log("Year: " + JSON.parse(data).Year);
        console.log("IMDB Rating: " + JSON.parse(data).imdbRating);
        console.log(JSON.parse(data).Ratings[1].Source + " Rating: " + JSON.parse(data).Ratings[1].Value);
        console.log("Country: " + JSON.parse(data).Country);
        console.log("Language: " + JSON.parse(data).Language);
        console.log("Plot: " + JSON.parse(data).Plot);
        console.log("Actors: " + JSON.parse(data).Actors);
    });
} else if (process.argv[2] == "do-what-it-says") {
    console.log(process.argv)
    var says = process.argv[3]
}