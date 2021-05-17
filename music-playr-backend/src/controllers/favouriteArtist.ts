import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import FavouriteArtist from '../models/FavouriteArtist';

const likeArtist = (req: Request, res: Response, next: NextFunction) => {
    let { userid, artistid } = req.body;

    const like = new FavouriteArtist({
        _id: new mongoose.Types.ObjectId(),
        _user_id: userid,
        _artist_id: artistid
    });

    FavouriteArtist.findOne({_user_id: userid, _artist_id: artistid})
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
            })});
        } else {
            FavouriteArtist.deleteOne({_user_id: userid, _artist_id: artistid})
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
            })});
        }
    });
}

const getUserFavArtists = (req: Request, res: Response, next: NextFunction) => {
    let { userid } = req.body;
    let favs: any[] = [];

    FavouriteArtist.aggregate([
        {
            $lookup: {
                from: "artists",
                localField: "_artist_id",
                foreignField: "_id",
                as: "artist"
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
}

export default { likeArtist, getUserFavArtists };