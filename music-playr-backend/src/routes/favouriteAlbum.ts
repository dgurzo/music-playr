import express from 'express';
import controller from '../controllers/favouriteAlbum';

const router = express.Router();

router.post("/like", controller.likeAlbum);

export default router;