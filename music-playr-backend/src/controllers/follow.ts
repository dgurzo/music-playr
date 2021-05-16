import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import Follow from '../models/Follow';

const startFollow = (req: Request, res: Response, next: NextFunction) => {
    let { followerid, followedid} = req.body;

    // TODO: check if the pair exists

    const follow = new Follow({
        _id: new mongoose.Types.ObjectId(),
        _follower_id: followerid,
        _followed_id: followedid
    });

    return follow.save()
    .then(follow => {
        return res.status(201).json(follow);
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
}

export default { startFollow };