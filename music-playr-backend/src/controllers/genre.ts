import { Request, Response, NextFunction } from 'express';
import Genre from '../models/Genre';
import Artist from '../models/Artist';
import Album from '../models/Album';

const getAllGenres = (req: Request, res: Response, next: NextFunction) => {
    Genre.find()
    .exec()
    .then(genres => {
        return res.status(200).json(genres);
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};

const getArtistsByGenre = (req: Request, res: Response, next: NextFunction) => {
    Artist.find({_genre_id: req.body.genreid})
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
};

const getAlbumsByGenre = (req: Request, res: Response, next: NextFunction) => {
    Album.find({_genre_id: req.body.genreid})
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

export default { getAllGenres, getArtistsByGenre, getAlbumsByGenre };