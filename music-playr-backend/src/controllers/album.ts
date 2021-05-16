import { Request, Response, NextFunction } from 'express';
import Album from '../models/Album';
import Song from '../models/Song';

const getAlbum = (req: Request, res: Response, next: NextFunction) => {
    Album.findOne({name: req.body.albumname})
    .exec()
    .then(album => {
        return res.status(200).json(album);
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};

const getSongs = (req: Request, res: Response, next: NextFunction) => {
    Song.find({_album_id: req.body.albumid})
    .exec()
    .then(song => {
        return res.status(200).json(song);
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};

export default { getAlbum, getSongs };