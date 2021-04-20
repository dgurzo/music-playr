import { Request, Response, NextFunction } from 'express';
import Genre from '../models/Genre';

const getAllGenres = (req: Request, res: Response, next: NextFunction) => {
    Genre.find()
    .exec()
    .then(results => {
        return res.status(200).json({
            genres: results,
            count: results.length
        });
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};

export default { getAllGenres };