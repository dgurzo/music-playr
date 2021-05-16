import express from 'express';
import controller from '../controllers/genre';

const router = express.Router();

router.get("/get/genres", controller.getAllGenres);
router.post("/get/artists", controller.getArtistsByGenre);
router.post("/get/albums", controller.getAlbumsByGenre);

export default router;