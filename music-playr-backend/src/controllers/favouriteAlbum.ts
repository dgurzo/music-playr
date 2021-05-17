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

    FavouriteAlbum.findOne({_user_id: userid, _album_id: albumid})
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
                })
            })
        } else {
            FavouriteAlbum.deleteOne({_user_id: userid, _album_id: albumid})
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

const getUserFavAlbums = (req: Request, res: Response, next: NextFunction) => {
    let { userid } = req.body;
    let favs: any[] = [];

    FavouriteAlbum.aggregate([
        {
            $lookup: {
                from: "albums",
                localField: "_album_id",
                foreignField: "_id",
                as: "album"
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

export default { likeAlbum, getUserFavAlbums };