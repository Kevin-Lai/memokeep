import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import RootReducer from '../reducers/root_reducer';

export const configureAppStore = preloadedState => {
    const store = configureStore({
        reducer: RootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware()
            .concat(process.env.NODE_ENV !== 'production' ? logger : []),
        preloadedState
    })

    return store;
}