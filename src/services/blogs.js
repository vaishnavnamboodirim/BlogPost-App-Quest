
const mongoose = require('mongoose');
//a way to retrievw a registered model
const Blog = mongoose.model('Blog');


const getBlogs = (options = {}) => {
    const { filter } = options;

    const filterClause = {};

    if(filter.modes) {
        filterClause.modes = filter.modes;
    }

    return Blog.find(filterClause);
};

const getBlogsById = (id) => {
    return Blog.findById(id);
}

const createBlog = (blog) => {
    return Blog.create(blog);
};

const updatedBlog = (id, blog) => {
    return Blog.findByIdAndUpdate(id,blog,{
        returnOriginal: false, //OR new: true,
        runValidators : true
    })
};

const removeBlog = (id) => {
    return Blog.findByIdAndDelete(id);
};

module.exports = {
    getBlogs,
    getBlogsById,
    createBlog,
    updatedBlog,
    removeBlog
};





