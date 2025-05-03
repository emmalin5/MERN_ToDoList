const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        required: false,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: false,
        default: Date.now
    }
});

module.exports = mongoose.model('Task', taskSchema);