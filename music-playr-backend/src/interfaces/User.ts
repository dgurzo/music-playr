import { Document } from 'mongoose';

export default interface IUser extends Document {
    full_name: string,
    username: string,
    password: string,
    email: string,
    profile_pic: string     // check this later
}