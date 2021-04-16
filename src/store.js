import { createStore } from 'redux';
import reviewReducer from './pages/Reviews/reviewReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(reviewReducer, devToolsEnhancer());

export default store;
