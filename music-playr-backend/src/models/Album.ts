import mongoose, { Schema } from "mongoose";
import IAlbum from '../interfaces/Album';

const albumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    release_date: {
        type: Date
    },
    _genre_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Genre'
    }],
    _artist_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Artist'
    }]
})

export default mongoose.model<IAlbum>('Album', albumSchema);