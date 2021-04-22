import { applyMiddleware, createStore, combineReducers } from 'redux';
import reviewReducer from './pages/Reviews/reviewReducer';
import albumsReducer from './pages/Albums/albumReducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import albums from './data/index';

const rootReducer = combineReducers({ reviews: reviewReducer, albums: albumsReducer });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
