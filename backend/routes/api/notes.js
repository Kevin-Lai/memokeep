const express = require("express");
const router = express.Router();

const Note = require("../../models/note");

router.get('/', (req, res) => {
    Note.find()
        .then(notes => res.json(notes))
        .catch(err => res.status(404).json(err))
});

router.post('/', (req, res) => {
    const newNote = new Note({
        title: req.body.title,
        content: req.body.content
    });

    newNote.save()
        .then(note => res.json(note))
        .catch(err => res.status(404).json(err));
});

module.exports = router;