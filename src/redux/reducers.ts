import {persistCombineReducers} from 'redux-persist';
import {AsyncStorage} from 'react-native';

// Redux Modules
import {NewsState, newsReducer} from './news';

const persistConfig = {
  key: 'primary',
  storage: AsyncStorage,
  whitelist: ['user'],
};

export type MainState = {
  news: NewsState;
};

export default persistCombineReducers<MainState>(persistConfig, {
  news: newsReducer,
});
