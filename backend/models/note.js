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
    color: {
        type: String,
        default: "white"
    }
}, {timestamps: true})

module.exports = Note = mongoose.model('Note', NoteSchema);