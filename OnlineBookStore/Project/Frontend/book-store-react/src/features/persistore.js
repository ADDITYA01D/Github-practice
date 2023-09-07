import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { useDispatch } from 'react-redux';
import cookieStorage from '../utils/cookieStorage';// Adjust the path
import sessionStorage from 'redux-persist/es/storage/session';
import authSlice from './authSlice';
import userSlice from './userSlice';

const rootReducer = combineReducers({
    auth: authSlice,
    user: userSlice,
    // ... other reducers
});

const persistConfig = {
    key: 'root',
    storage: sessionStorage, // Use the cookieStorage utility
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const useAppDispatch = () => useDispatch();

export const persistor = persistStore(store);
