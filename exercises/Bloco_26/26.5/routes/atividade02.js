import { Router } from 'express';
import rescue from 'express-rescue';
import authToken from '../middlewares/authToken.js';
import btcApi from '../middlewares/btcApiMiddleware.js';

const router = Router();

router.get('/price', rescue(authToken), rescue(btcApi));

export default router;
