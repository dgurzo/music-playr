import mongoose, { Schema } from 'mongoose';
import IPodcastEpisode from '../interfaces/PodcastEpisode';

const podcastEpisodeSchema = new mongoose.Schema({
    _podcast_id: {
        type: Schema.Types.ObjectId,
        ref: 'Podcast'
    },
    name: {
        type: String,
        required: true
    },
    seconds: {
        type: Number,
        required: true
    }
})

export default mongoose.model<IPodcastEpisode>('PodcastEpisode', podcastEpisodeSchema);