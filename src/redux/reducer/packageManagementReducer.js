import { RESET_GLOBAL_STATE, UPDATE_PRODUCT, DELETE_COUNTRY, GET_CATEGORY, GET_TAG, DELETE_ROOM, DELETE_VISA, UPDATE_VISA, ADD_COUNTRY, GET_COUNTRY, ADD_TAG, GET_INCLUDED, ADD_CATEGORY, ADD_INCLUDED, UPDATE_ROOM, UPDATE_COUNTRY, DELETE_PRODUCT } from '../type';

const initialState = {
    getAllCategories: [],
    getIncluded: [],
    getCountry: [],
    addCategory: [],
    addIncluded: [],
    addCountry: [],
    updateRoom: [],
    updateCountry: [],
    updateProduct: [],
    updateVisa: [],
    deleteProduct: null,
    deleteCountry: [],
    deleteVisa: [],
    getTag: [],
    addTag: [],
    getOrderList: [],
    getorderById: [],
    deleteRoom: null,
};


const packageManagementReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CATEGORY: 
        return {
            ...state,
            getAllCategories: action.payload,
        };
        case GET_INCLUDED: 
        return {
            ...state,
            getIncluded: action.payload,
        };
        case GET_TAG:
            return {
                ...state,
                getTag: action.payload,
            };
        case GET_COUNTRY: 
         return {
            ...state,
            getCountry: action.payload,
         };
         case ADD_TAG:
            return {
                ...state,
                addTag: action.payload,
            };
        case ADD_CATEGORY:
            return {
                ...state,
                addCategory: action.payload,
                    };
        case ADD_INCLUDED:
            return {
                ...state,
                addIncluded: action.payload,
            };
        case ADD_COUNTRY:
            return {
                ...state,
                addCountry: action.payload,
            };
        case UPDATE_ROOM: 
        return {
            ...state,
            getAllRoom: state.getAllRoom.map((room) =>
                room._id === action.payload.roomId
                  ? { ...room, name: action.payload.name }
                  : room
              ),
            };
        case UPDATE_COUNTRY: 
        return {
            ...state,
            updateCountry: action.payload,
        };
        case UPDATE_PRODUCT:
            return {
                ...state,
                updateProduct: action.payload,
            };
        case UPDATE_VISA:
            return {
                ...state,
                updateVisa: action.payload,
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                getProduct: state.getProduct.filter(
                    (product) => product._id !== action.payload 
                  ),
                  deleteProduct: null,
            };
        case DELETE_COUNTRY:
            return {
                ...state,
                deleteCountry: action.payload,
            };
        case DELETE_VISA:
            return {
                ...state,
                deleteVisa: action.payload,
            };
        case DELETE_ROOM:
            return {
                ...state,
                getAllRoom: state.getAllRoom.filter(
                    (room) => room._id !== action.payload
                ),  
            };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
};

export default packageManagementReducer;