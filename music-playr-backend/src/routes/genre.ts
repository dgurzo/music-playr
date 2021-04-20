import express from 'express';
import controller from '../controllers/genre';

const router = express.Router();

router.get("/get/genres", controller.getAllGenres);

export default router;