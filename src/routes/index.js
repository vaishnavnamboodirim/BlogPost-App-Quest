const express = require('express');

const {
    getHome, 
    getAbout,
    getBlogs
} = require('../controllers/index')

const router = express.Router();

router.get('/', getHome);
router.get('/about', getAbout);
router.get('/blogs', getBlogs);

module.exports = router; //adding the router to the application

