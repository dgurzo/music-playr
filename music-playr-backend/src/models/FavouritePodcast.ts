import mongoose, { Schema } from 'mongoose';
import IFavouritePodcast from '../interfaces/FavouritePodcast';

const favouritePodcastSchema = new mongoose.Schema({
    _user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _podcast_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Podcast'
    }]
})

export default mongoose.model<IFavouritePodcast>('FavouritePodcast', favouritePodcastSchema);