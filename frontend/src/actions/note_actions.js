import axios from 'axios';

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";

const receiveNotes = (notes) => {
    return {
        type: RECEIVE_NOTES,
        notes
    }
}

const receiveNote = (note) => {
    return {
        type: RECEIVE_NOTE,
        note
    }
}

const removeNote = (noteId) => {
    return {
        type: REMOVE_NOTE,
        noteId
    }
}

export const fetchNotes = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000/api/notes/');
        dispatch(receiveNotes(res.data));
    }
    catch (err) {
        console.log('Unable to get fetch notes');
    }
}

export const fetchArchivedNotes = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000/api/notes/archive/');
        dispatch(receiveNotes(res.data));
    }
    catch (err) {
        console.log('Unable to get fetch notes');
    }
}

export const fetchTrashedNotes = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000/api/notes/trash/');
        dispatch(receiveNotes(res.data));
    }
    catch (err) {
        console.log('Unable to get fetch notes');
    }
}

export const fetchNote = (noteId) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:5000/api/notes/${noteId}`);
        dispatch(receiveNote(res.data));
    }
    catch (err) {
        console.log('Unable to get fetch note');
    }
}

export const createNote = note => async dispatch => {
    try {
        const res = await axios.post('http://localhost:5000/api/notes/', note);
        dispatch(receiveNote(res.data));
    }
    catch (err) {
        console.log('Unable to create note');
    }
}

export const updateNote = note => async dispatch => {
    try {
        const res = await axios.patch(`http://localhost:5000/api/notes/${note._id}`, note);
        dispatch(receiveNote(res.data));
    }
    catch (err) {
        console.log('Unable to edit note');
    }
}

export const deleteNote = noteId => async dispatch => {
    try {
        await axios.delete(`http://localhost:5000/api/notes/${noteId}`);
        dispatch(removeNote(noteId));
    }
    catch (err) {
        console.log('Unable to delete note');
    }
}
