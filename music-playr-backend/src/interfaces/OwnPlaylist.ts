import { Document } from 'mongoose';

export default interface IOwnPlaylist extends Document {
    _user_id: string,
    _song_id: string[],
    name: string
}