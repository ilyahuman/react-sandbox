import { compose, combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { userReducer } from './reducers/userReducer';
import { productReducer } from "./reducers/productReducer";

// const checkTokenExpirationMiddleware = store => next => action => {
//     const token =
//         JSON.parse(localStorage.getItem("token"));
//     if (jwtDecode(token).exp < Date.now() / 1000) {
//         next(action);
//         localStorage.clear();
//     }
//     next(action);
// };

const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer
});

const middleware = [
    logger,
    thunk
];

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, storeEnhancers(applyMiddleware(...middleware)));
