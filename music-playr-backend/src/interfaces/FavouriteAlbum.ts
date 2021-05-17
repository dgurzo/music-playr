import { Document } from 'mongoose';

export default interface IFavouriteAlbum extends Document {
    _user_id: string,
    _album_id: string
}