import express from 'express';
import controller from '../controllers/album';

const router = express.Router();

router.post("/get", controller.getAlbum);
router.post("/get/songs", controller.getSongs);

export default router;