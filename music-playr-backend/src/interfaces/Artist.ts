import { Document } from 'mongoose';

export default interface IArtist extends Document {
    name: string,
    _genre_id: string[],
    image: string       // check this later
}