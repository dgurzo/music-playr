import mongoose, { Schema } from "mongoose";
import IGenre from '../interfaces/Genre';

const genreSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    }
});

export default mongoose.model<IGenre>('Genre', genreSchema);