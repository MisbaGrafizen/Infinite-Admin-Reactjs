// import { configureStore } from '@reduxjs/toolkit';
// import  { categoryReducer, productReducer } from './slices/productSlice'


// const store = configureStore({
//     reducer:{
//         product: productReducer,
//         categories: categoryReducer,
//     }
// })


// export default store;

import { applyMiddleware, combineReducers, createStore} from "redux";
import { thunk } from "redux-thunk";
import userManagementReducer from "./reducer/userManagementReducer";
import landingManagementReducer from "./reducer/landingManagementReducer";
import packageManagementReducer from "./reducer/packageManagementReducer";


const rootReducer = combineReducers({
    landing: landingManagementReducer,
    users: userManagementReducer,
    package: packageManagementReducer,
   
});

const store = createStore(rootReducer,window.REDUX_DEVTOOLS_EXTENSION_COMPOSE && Window.__REDUX_DEVTOOLS_EXTENSION_(), applyMiddleware(thunk));

export default store;