import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import News from './News';

// const videoPersistConfig = {
//   key: 'Video',
//   storage: AsyncStorage,
//   blacklist: ['currentVideos'],
// };

const authPersistConfig = {
  key: 'News',
  storage: AsyncStorage,
  blacklist: ['error', 'isLoading', 'param'],
  keyPrefix: '',
};

const Reducers = combineReducers({
  News: persistReducer(authPersistConfig, News),
});

const reducers = (state, action) => {
  console.warn(action.type);
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return Reducers(state, action);
};
export default reducers;

