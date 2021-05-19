import { Document } from 'mongoose';

export default interface IAlbum extends Document {
    name: string,
    _genre_id: string[],
    _artist_id: string[],
    image: string
}