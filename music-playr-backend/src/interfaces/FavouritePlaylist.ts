import { Document } from 'mongoose';

export default interface IFavouritePlaylist extends Document {
    _user_id: string,
    _playlist_id: string[]
}