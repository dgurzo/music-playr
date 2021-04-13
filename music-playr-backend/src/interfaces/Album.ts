import { Document } from 'mongoose';

export default interface IAlbum extends Document {
    release_date: Date,
    _genre_id: string[],
    _artist_id: string[],
    image: string           // check this later
}