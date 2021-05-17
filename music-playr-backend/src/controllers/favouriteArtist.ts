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
            .then( like => {
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
    
    

    /*return like.save()
    .then(like => {
        return res.status(201).json(like);
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });*/
}

export default { likeArtist };