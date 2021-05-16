import mongoose, { Schema } from 'mongoose';
import IArtist from '../interfaces/Artist';

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    _genre_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Genre'
    }]
})

export default mongoose.model<IArtist>('Artist', artistSchema);