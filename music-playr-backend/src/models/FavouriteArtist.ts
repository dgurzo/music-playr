import mongoose, { Schema } from 'mongoose';
import IFavouriteArtist from '../interfaces/FavouriteArtist';

const favouriteArtistSchema = new mongoose.Schema({
    _user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _artist_id: {
        type: Schema.Types.ObjectId,
        ref: 'Artist'
    }
})

export default mongoose.model<IFavouriteArtist>('FavouriteArtist', favouriteArtistSchema);