import * as express from 'express';
import rescue from 'express-rescue';
import authRegister from '../middlewares/authRegisterMiddleware.js';
import authLoginMiddleware from '../middlewares/authLoginMiddleware.js';

const router = express.Router();

router.post('/register', rescue(authRegister));

router.post('/login', rescue(authLoginMiddleware));

export default router;
