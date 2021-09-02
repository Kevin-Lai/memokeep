import { combineReducers } from 'redux';
import NotesReducer from './notes_reducer';

const RootReducer = combineReducers({
    notes: NotesReducer
})

export default RootReducer;