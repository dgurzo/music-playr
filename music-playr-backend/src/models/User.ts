import mongoose, { Schema } from 'mongoose';
import IUser from '../interfaces/User';

const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: String,
    profile_pic: {
        data: Buffer,
        contentType: String
    }
})

export default mongoose.model<IUser>('User', userSchema);