import express from 'express';
import controller from '../controllers/follow';

const router = express.Router();

router.post("/start", controller.startFollow);
router.post("/getfollows", controller.getFollows);

export default router;