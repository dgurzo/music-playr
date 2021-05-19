import { Document } from 'mongoose';

export default interface IGenre extends Document {
    name: string;
    image: string
}