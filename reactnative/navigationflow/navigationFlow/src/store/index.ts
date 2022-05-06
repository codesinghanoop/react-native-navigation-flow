import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { AsyncStorage } from 'react-native';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist';
import { authSlice } from './reducerSlice/auth'
import { expSlice } from './reducerSlice/experiment'
import { selectionSlice } from './reducerSlice/selection'

const persistConfig = {
	key: 'root',
	version: 1,
	storage: AsyncStorage,
	blacklist: ['auth'],
};

const rootReducer = combineReducers({
	auth: authSlice.reducer,
  experiment: expSlice.reducer,
  selection: selectionSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		})
})

export default store