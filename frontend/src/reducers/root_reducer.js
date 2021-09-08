import { combineReducers } from 'redux';
import notes from './notes_reducer';
import modal from './modal_reducer';

const RootReducer = combineReducers({
  notes,
  modal
});

export default RootReducer;