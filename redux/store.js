import {createStore, applyMiddleware} from 'redux';
import rootReducers from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['News'], // uncomment this line if you want to use persist for navigation
  timeout: null,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor};
