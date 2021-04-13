import { Document } from 'mongoose';

export default interface IPodcast extends Document {
    name: string,
    image: string,
    _category_id: string[]
}