const express = require('express');

const { getBlogs,getBlogsById,postBlog,patchBlog,deleteBlog} = require('../../controllers/api/blogs');

const router = express.Router();

router.get('/api/blogs',getBlogs);//configuring the router
// "id" is a path parameter
router.get('/api/blogs/:id',getBlogsById);
router.post('/api/blogs', postBlog);
router.patch('/api/blogs/:id',patchBlog);
router.delete('/api/blogs/:id',deleteBlog);

module.exports = router; //exporting the router