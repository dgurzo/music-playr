import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import FavouriteSong from '../models/FavouriteSong';

const likeSong = (req: Request, res: Response, next: NextFunction) => {
    let { userid, songid } = req.body;
    
    const like = new FavouriteSong({
        _id: new mongoose.Types.ObjectId(),
        _user_id: userid,
        _song_id: songid
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

export default { likeSong };