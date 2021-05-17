import mongoose, { Schema } from 'mongoose';
import IFavouriteSong from '../interfaces/FavouriteSong';

const favouriteSongSchema = new mongoose.Schema({
    _user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _song_id: {
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }
})

export default mongoose.model<IFavouriteSong>('FavouriteSong', favouriteSongSchema);