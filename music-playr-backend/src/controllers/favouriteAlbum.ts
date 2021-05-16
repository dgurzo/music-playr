import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import FavouriteAlbum from '../models/FavouriteAlbum';

const likeAlbum = (req: Request, res: Response, next: NextFunction) => {
    let { userid, albumid } = req.body;
    
    const like = new FavouriteAlbum({
        _id: new mongoose.Types.ObjectId(),
        _user_id: userid,
        _album_id: albumid
    });

    return like.save()
    .then(like => {
        return res.status(201).json(like);
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
}

export default { likeAlbum };