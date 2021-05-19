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


// ADDING GENRES
/*let genre1 = new Genre();
genre1.name = "Jazz";
genre1.image = "https://i.scdn.co/image/ab67706f00000003c7f0907c5695f95f16e4eaf2"
genre1.save((err) => {
    console.log("err");
});

let genre2 = new Genre();
genre2.name = "Blues";
genre2.image = "https://i.scdn.co/image/ab67706f0000000317ef1cd7cae935006db1c9f7"
genre2.save((err) => {
    console.log("err");
});

let genre3 = new Genre();
genre3.name = "Country";
genre3.image = "https://i.scdn.co/image/ab67706f000000037df715eca2bdf3dc4f515b02"
genre3.save((err) => {
    console.log("err");
});*/

// ADDING ARTISTS FOR JAZZ
/*let artist = new Artist();
artist.name = "Christian Scott";
artist._genre_id = ["60a37dd6b409f52d0c303eca"];
artist.save((err) => {
    console.log(err);
});

let artist2 = new Artist();
artist2.name = "Jorja Smith";
artist2._genre_id = ["60a37dd6b409f52d0c303eca"];
artist2.save((err) => {
    console.log(err);
});*/

//ADDING ALBUMS FOR Christian Scott
/*let album = new Album();
album.name = "Axiom";
album._genre_id = ["60a37dd6b409f52d0c303eca"];
album._artist_id = ["60a37ea3c5a7881c18575834"];
album.image = "https://i.scdn.co/image/ab67616d00001e026e3f3d43902a6c13c385c7f6";
album.save((err) => {
    console.log(err);
})*/

/*et album2 = new Album();
album2.name = "Yesterday you said";
album2._genre_id = ["60a37dd6b409f52d0c303eca"];
album2._artist_id = ["60a37ea3c5a7881c18575834"];
album2.save((err) => {
    console.log(err);
})*/

//ADDING SONGS
/*let song = new Song();
song.name = "Huntress";
song.seconds = 90;
song._artist_id = ["60a37ea3c5a7881c18575834"];
song._album_id = "60a383123078494650f8d0d8";
song.url = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
song.save((err) => {
    console.log(err);
})*/

