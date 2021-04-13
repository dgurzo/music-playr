import express, { Application, Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';

const app: Application = express();
app.use(json());

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


// Testing database
import User from './models/User';
import Artist from './models/Artist';
import Song from './models/Song';
import Album from './models/Album';

let user1 = new User();
user1.full_name = "asdasd";
user1.username = "lksdn";
user1.password = 'fdfb';
user1.save((err) => {
    console.log(err);
    console.log("hurrá");
})

let artist = new Artist();
artist.name = "Dávid";
artist.save((err) => {
    console.log(err);
    console.log("hurrá");
})