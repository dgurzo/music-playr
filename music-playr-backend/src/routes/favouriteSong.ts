import express from 'express';
import controller from '../controllers/favouriteSong';

const router = express.Router();

router.post("/like", controller.likeSong);
router.post("/getfavouritesongs", controller.getUserFavSongs);

export default router;