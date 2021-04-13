import mongoose, { Schema } from "mongoose";
import IPlaylist from '../interfaces/Playlist';

const playlistSchema = new mongoose.Schema({
    _song_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],
    description: String,
    image: {
        data: Buffer,
        contentType: String
    }
})

export default mongoose.model<IPlaylist>('Playlist', playlistSchema);