import { Document } from 'mongoose';

export default interface ISong extends Document {
    name: string,
    _artist_id: string[],
    _album_id: string,
    seconds: number
}