const express = require("express");
const router = express.Router();

const Note = require("../../models/note");

router.get('/', (req, res) => {
    Note.find({ archived: false, trashed: false })
        .then(notes => res.json(notes))
        .catch(err => res.status(404).json(err))
});

router.get('/archive', (req, res) => {
    Note.find({ archived: true })
        .then(notes => res.json(notes))
        .catch(err => res.status(404).json(err))
});

router.get('/trash', (req, res) => {
    Note.find({ trashed: true })
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

router.patch('/:id', (req, res) => {

    const reqUpdates = {
        title: req.body.title,
        content: req.body.content,
        archived: req.body.archived,
        trashed: req.body.trashed,
        pinned: req.body.pinned
    };

    Note.findByIdAndUpdate(req.params.id, reqUpdates, { new: true })
        .then(note => res.json(note))
        .catch(err => res.status(404).json(err));
});

router.delete('/:id', (req, res) => {
    Note.findByIdAndDelete(req.params.id)
        .then(note => res.json(note))
        .catch(err => res.status(404).json(err));
});

module.exports = router;