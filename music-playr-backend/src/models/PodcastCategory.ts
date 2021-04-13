import mongoose, { Schema } from 'mongoose';
import IPodcastCategory from '../interfaces/PodcastCategory';

const podcastCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

export default mongoose.model<IPodcastCategory>('PodcastCategory', podcastCategorySchema);