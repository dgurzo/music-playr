import mongoose, { Schema } from "mongoose";
import IOwnPlaylist from '../interfaces/OwnPlaylist';

const ownPlaylistSchema = new mongoose.Schema({
    _user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _song_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],
    name: {
        type: String,
        required: true
    }
})

export default mongoose.model<IOwnPlaylist>('OwnPlaylist', ownPlaylistSchema);