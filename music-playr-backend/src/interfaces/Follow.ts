import { Document } from 'mongoose';

export default interface IFollow extends Document {
    _follower_id: string,
    _followed_id: string
}