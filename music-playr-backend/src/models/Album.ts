import mongoose, { Schema } from "mongoose";
import IAlbum from '../interfaces/Album';

const albumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        required: true
    },
    _genre_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Genre'
    }],
    _artist_id: [{
        type: Schema.Types.ObjectId.cast,
        ref: 'Artist'
    }],
    image: {
        data: Buffer,
        contentType: String
    }
})

export default mongoose.model<IAlbum>('Album', albumSchema);