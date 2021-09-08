
import {
    RECEIVE_NOTES,
    RECEIVE_NOTE,
    REMOVE_NOTE
} from '../actions/note_actions';

const NoteReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({},state);
    
    switch (action.type) {
        case RECEIVE_NOTES:
            newState = action.notes;
            return newState;
        case RECEIVE_NOTE:
            newState[action.note._id] = action.note;
            return newState;
        case REMOVE_NOTE:
            //debugger
            delete newState[action.noteId];
            return newState;            
        default:
            return state;
    }
}

export default NoteReducer;