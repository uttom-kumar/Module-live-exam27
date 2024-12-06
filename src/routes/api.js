import express from 'express'
const router = express.Router()

import { CreateBlog, DeleteBlog, ReadBlog, UpdateBlog } from '../controller/Blog-controller.js';



router.post('/createBlog', CreateBlog)
router.get('/ReadBlog/:blogID', ReadBlog)
router.post('/UpdateBlog/:blogID', UpdateBlog)
router.post('/DeleteBlog/:blogID', DeleteBlog)





export default router;