const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    commenter: {
        type: String,
        required: true
    },
    title: {
        type: String,
    },
    comment: {
        type: String,
        required: true
      },
    createdAt: {
        type: Number,
        default: Date.now
    }
},{_id:false});

//no model for this - since we do not want a collection for this.

module.exports = commentSchema;