import express from 'express';
import controller from '../controllers/favouriteArtist';

const router = express.Router();

router.post("/like", controller.likeArtist);

export default router;