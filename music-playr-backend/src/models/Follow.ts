import mongoose, { Schema } from 'mongoose';
import IFollow from '../interfaces/Follow';

const followSchema = new mongoose.Schema({
    _follower_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _followed_id: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

export default mongoose.model<IFollow>('Follow', followSchema);