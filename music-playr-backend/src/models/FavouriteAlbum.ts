import mongoose, { Schema } from 'mongoose';
import IFavouriteAlbum from '../interfaces/FavouriteAlbum';

const favouriteAlbumSchema = new mongoose.Schema({
    _user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _album_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }]
})

export default mongoose.model<IFavouriteAlbum>('FavouriteAlbum', favouriteAlbumSchema);