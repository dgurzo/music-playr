import mongoose, { Schema } from "mongoose";
import IFavouritePlaylist from '../interfaces/FavouritePlaylist';

const favouritePlaylistSchema = new mongoose.Schema ({
    _user_id: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    _playlist_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Playlist'
    }]
})

export default mongoose.model<IFavouritePlaylist>('FavouritePlaylist', favouritePlaylistSchema);