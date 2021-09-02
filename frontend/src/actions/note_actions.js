import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

export const receiveNotes = createAction('RECEIVE_NOTES');
export const receiveNote = createAction('RECEIVE_NOTE');
export const removeNote = createAction('REMOVE_NOTE');

export const fetchNotes = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000/api/notes/');
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
        const res = await axios.delete(`http://localhost:5000/api/notes/${noteId}`);
        dispatch(removeNote(res.data));
    }
    catch (err) {
        console.log('Unable to delete note');
    }
}
