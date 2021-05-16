import { Request, Response, NextFunction } from 'express';
import Artist from '../models/Artist';
import Album from '../models/Album';

const getArtist = (req: Request, res: Response, next: NextFunction) => {
    Artist.findOne({name: req.body.artistname})
    .exec()
    .then(artist => {
        return res.status(200).json(artist);
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message,
            error
            });
    });
}

const getAlbums = (req: Request, res: Response, next: NextFunction) => {
    Album.find({_artist_id: req.body.artistid})
    .exec()
    .then(album => {
        return res.status(200).json(album);
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message,
            error
        });
    })
}

export default { getArtist, getAlbums };