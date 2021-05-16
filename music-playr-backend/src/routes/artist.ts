import express from 'express';
import controller from '../controllers/artist';

const router = express.Router();

router.post("/get", controller.getArtist);
router.post("/get/albums", controller.getAlbums);

export default router;