const mongoose = require('mongoose');
//a way to retrievw a registered model
const Blog = mongoose.model('Blog');

const blogs = require('../data/blogs.json'); //require will read json and covert it into javascript object


const getBlogs = (options = {}) => {
    const { filter } = options;

    if (filter && filter.mode) {
        return blogs.filter(
            blog => blog.modes[filter.mode]
        )
    } else {
        return blogs;
    }
};

const getBlogsById = (id) => {
    return blogs.find(
        blog => blog.id === id
    );
}

const createBlog = (blog) => {
    return Blog.create(blog);
};

module.exports = {
    getBlogs,
    getBlogsById,
    createBlog
};


