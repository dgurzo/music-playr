import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import FavouriteSong from '../models/FavouriteSong';
import Song from '../models/Song';

const likeSong = (req: Request, res: Response, next: NextFunction) => {
    let { userid, songid } = req.body;
    
    const like = new FavouriteSong({
        _id: new mongoose.Types.ObjectId(),
        _user_id: userid,
        _song_id: songid
    });

    FavouriteSong.findOne({_user_id: userid, _song_id: songid})
    .exec()
    .then(user => {
        if(user === null) {
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
        } else {
            FavouriteSong.deleteOne({_user_id: userid, _song_id: songid})
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
            })
        }
    })
}

const getUserFavSongs = (req: Request, res: Response, next: NextFunction) => {
    let { userid } = req.body;
    let favs: any[] = [];

    FavouriteSong.aggregate([
        {
            $lookup: {
                from: "songs",
                localField: "_song_id",
                foreignField: "_id",
                as: "song"
            }
        }
    ])
    .exec()
    .then((fav: any) => {
        favs = fav;
        console.log(favs);
        for(let i = 0; i < favs.length; i++) {
            if(favs[i]._user_id != userid) {
                favs.splice(i, 1);
            }
        }
        console.log(favs);
        return res.status(500).json(favs);
    })
    /*.catch((error: any) => {
        return res.status(500).json({
            message: error.message,
            error
        })
    });*/
}

export default { likeSong, getUserFavSongs };