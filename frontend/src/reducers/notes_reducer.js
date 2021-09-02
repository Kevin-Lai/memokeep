import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    notes: {}
}

export const NotesReducer = createReducer(initialState, builder => {
    builder
        .addCase("RECEIVE_NOTES", (state, action) => {
            const notes = {};
            action.payload.map(note => notes[note._id] = note);
            state.notes = notes;
        })
        .addCase("RECEIVE_NOTE", (state, action) => {
            state.notes[action.payload._id] = action.payload
        })
})