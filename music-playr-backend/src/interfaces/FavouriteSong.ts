import { Document } from 'mongoose';

export default interface IFavouriteSong extends Document {
    _user_id: string,
    _song_id: string
}