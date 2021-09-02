import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import NotesReducer from '../reducers/notes_reducer';

export const configureAppStore = preloadedState => {
    const store = configureStore({
        reducer: NotesReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware()
            .concat(process.env.NODE_ENV !== 'production' ? logger : []),
        preloadedState
    })

    return store;
}