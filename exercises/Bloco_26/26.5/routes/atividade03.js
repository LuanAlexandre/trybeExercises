import express from 'express';
import rescue from 'express-rescue';
import postById from '../middlewares/postByIdMiddleware.js';
import pageNotFound from '../middlewares/pageNotFoundMiddleware.js';
import allPosts from '../middlewares/allPostsMiddleware.js';
import error from '../middlewares/errorMiddleware.js';

const router = express.Router();

router.get('/', rescue(allPosts));

router.get('/:id', rescue(postById));

router.use('*', pageNotFound);

router.use(error);

export default router;
