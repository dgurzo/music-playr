import express, { Application, Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import genreRoutes from './routes/genre';
import userRoutes from './routes/user';
import artistRoutes from './routes/artist';
import albumRoutes from './routes/album';
import followRoutes from './routes/follow';
import favouriteArtistRoutes from './routes/favouriteArtist';
import favouriteAlbumRoutes from './routes/favouriteAlbum';
import favouriteSongRoutes from './routes/favouriteSong';
import cors from 'cors';
import SpotifyWebApi from 'spotify-web-api-node';

const app: Application = express();
app.use(json());

const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
    origin: allowedOrigins
  };
app.use(cors(options));


mongoose.connect('mongodb://localhost/musicplayr', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connected to database');
})


app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello');
});

app.listen(5000, () => console.log('Server is listening on port 5000'));

//----------------------------------------------------------------------------
//Routes go here
app.use("/api/genres", genreRoutes);
app.use("/users", userRoutes);
app.use("/artist", artistRoutes);
app.use("/album", albumRoutes);
app.use("/follow", followRoutes);
app.use("/favouriteartist", favouriteArtistRoutes);
app.use("/favouritealbum", favouriteAlbumRoutes);
app.use("/favouritesong", favouriteSongRoutes);


// Testing database
import User from './models/User';
import Artist from './models/Artist';
import Genre from './models/Genre';
import Album from './models/Album';
import Song from './models/Song';
import favouriteArtist from './controllers/favouriteArtist';

/*let user1 = new User();
user1.full_name = "Dávid";
user1.username = "david";
user1.password = 'asd';
user1.email = "a@b.c";
user1.save((err) => {
    console.log(err);
    console.log("hurrá");
});*/

/*let genre = new Genre();
genre.name = "Ambient";
genre.save((err) => {
    console.log("err");
});*/

/*let artist = new Artist();
artist.name = "Planetshakers";
artist._genre_id = ["609becfb6792b53fd8b51e6c"];
artist.save((err) => {
    console.log(err);
});*/

/*let album = new Album();
album.name = "This is our time";
album._genre_id = ["609becfb6792b53fd8b51e6c"];
album._artist_id = ["609bfd674a53b61628d9e0cb"];
album.save((err) => {
    console.log(err);
})*/

/*let song = new Song();
song.name = "My Heart is Alive";
song.seconds = 90;
song._artist_id = ["609bfd674a53b61628d9e0cb"];
song._album_id = "609c06e67629c738d8d67edc";
song.save((err) => {
    console.log(err);
})*/

/*var spotifyApi = new SpotifyWebApi({
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
});*/

