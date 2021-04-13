import { Document } from 'mongoose';

export default interface IPodcastEpisode extends Document {
    _podcast_id: string,
    name: string,
    seconds: number
}