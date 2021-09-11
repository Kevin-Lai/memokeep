const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = Schema({
    title: {
        type: String,
        required: true  
    },
    content: {
        type: String,
        required: true
    },
    reminder: {
        type: Date,
    },
    archived: {
        type: Boolean,
        default: false
    },
    trashed: {
        type: Boolean,
        default: false
    },
    pinned: {
        type: Boolean,
        default: false
    },
    color: {
        type: String,
        default: "white"
    }
}, {timestamps: true})

module.exports = Note = mongoose.model('Note', NoteSchema);