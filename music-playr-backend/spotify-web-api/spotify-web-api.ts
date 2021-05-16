import SpotifyWebApi from 'spotify-web-api-node';
import mongoose from 'mongoose';

var spotifyApi = new SpotifyWebApi({
    clientId: '00d7c4a1093143748eb60dbb0b6b3b76',
  clientSecret: '57850cbd0d50478b8e79ea844fe9cb40',
  redirectUri: 'http://www.example.com/callback'
});

spotifyApi.getCategory('rock', {
    country: 'HU',
    locale: 'HU'
})
.then(function(data) {
  console.log(data.body);
}, function(err) {
  console.log("Something went wrong!", err);
});