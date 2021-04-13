import { Document } from 'mongoose';

export default interface IFavouritePocast extends Document {
    _user_id: string,
    _podcast_id: string[]
}