import mongoose, { Schema } from "mongoose";
import IPodcast from '../interfaces/Podcast';

const podcastSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    _category_id: [{
        type: Schema.Types.ObjectId,
        ref: 'PodcastCategory'
    }]
})

export default mongoose.model<IPodcast>('Podcast', podcastSchema);