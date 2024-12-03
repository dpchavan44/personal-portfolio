import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';
import configData from './configData';
import experienceReducer from './experienceSlice';
import certificationReducer from './certificationSlice';
import awardReducer from './awardSlice';

const rootReducer = combineReducers({
    configData: configData,
    experience: experienceReducer,
    certifications: certificationReducer,
    awards: awardReducer,
});

// Persist configuration
const persistConfig = {
    key: 'root',
    storage,
    version: 1, // Add version to persist config
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const appStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
  });

const persistor = persistStore(appStore);
export { appStore, persistor };
