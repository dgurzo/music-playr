import { Document } from 'mongoose';

export default interface IAlbum extends Document {
    name: string,
    release_date: Date,
    _genre_id: string[],
    _artist_id: string[]
}