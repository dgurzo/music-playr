import { Document } from 'mongoose';

export default interface IPodcastCategory extends Document {
    name: string
}