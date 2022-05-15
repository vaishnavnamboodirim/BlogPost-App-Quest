const mongoose = require('mongoose');
const commentSchema = require('./Comment')

const blogSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    abstract: {
        type: String,
        required: true,
        minlength: 20
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    comment: {
        type: [String],
        enus: ['Yes','No']

    },
    comments: {
        type: commentSchema
    },
    imageurl: {
        type: String,
        required: true
    }
});

mongoose.model('Blog',blogSchema)
