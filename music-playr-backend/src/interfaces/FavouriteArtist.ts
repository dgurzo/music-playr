import { Document } from 'mongoose';

export default interface IFavouriteArtist extends Document {
    _user_id: string,
    _artist_id: string
}