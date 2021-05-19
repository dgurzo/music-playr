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

    Follow.findOne({_follower_id: followerid, _followed_id: followedid})
    .exec()
    .then(fol => {
        if(fol === null) {
            return follow.save()
            .then(f => {
                return res.status(201).json(follow);
            })
            .catch(error => {
                return res.status(500).json({
                    message: error.message,
                    error
                });
            });
        } else {
            Follow.deleteOne({_follower_id: followerid, _followed_id: followedid})
            .exec()
            .then(result => {
                return res.status(200).json({
                    delete: "successful"
                })
            })
            .catch(error => {
                return res.status(500).json({
                    message: error.message,
                    error
                })
            });
        }
    })
}

const getFollows = (req: Request, res: Response, next: NextFunction) => {
    let { userid } = req.body;
    let fol: any[] = [];

    Follow.aggregate([
        {
            $lookup: {
                from: "users",
                localField: "_followed_id",
                foreignField: "_id",
                as: "follower"
            }
        }
    ])
    .exec()
    .then((follow: any) => {
        fol = follow;
        console.log(fol);
        for(let i = 0; i < fol.length; i++) {
            if(fol[i]._follower_id != userid) {
                fol.splice(i, 1);
            }
        }
        console.log(fol);
        return res.status(500).json(fol);
    })
}

export default { startFollow, getFollows };