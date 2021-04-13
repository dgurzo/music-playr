import { Document } from 'mongoose';

export default interface IPlaylist extends Document {
    _song_id: string[],
    description: string,
    image: string           // check this later
}