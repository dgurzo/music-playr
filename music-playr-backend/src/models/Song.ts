import mongoose, { Schema } from "mongoose";
import ISong from '../interfaces/Song';

const songSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    _artist_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Artist'
    }],
    _album_id: {
        type: Schema.Types.ObjectId,
        ref: 'Album'
    },
    seconds: {
        type: Number,
        required: true
    },
    url: String
})

export default mongoose.model<ISong>('Song', songSchema);