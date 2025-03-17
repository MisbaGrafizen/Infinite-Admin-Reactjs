import {
  RESET_GLOBAL_STATE,
  DELETE_PASSPORT,
  UPDATE_PRODUCT,
  GET_ROOM,
  GET_PACKAGES,
  DELETE_ROOM,
  DELETE_VISA,
  UPDATE_VISA,
  ADD_PASSPORT,
  GET_PASSPORT,
  ADD_PRODUCT,
  GET_VISA,
  ADD_ROOM,
  ADD_VISA,
  UPDATE_ROOM,
  UPDATE_PASSPORT,
  DELETE_PRODUCT,
} from "../type";

const initialState = {
  getAllRoom: [],
  getVisa: [],
  getPassport: [],
  addRoom: [],
  addVisa: [],
  addPassport: [],
  updateRoom: [],
  updatePassport: [],
  updateProduct: [],
  updateVisa: [],
  deleteProduct: null,
  deletePassport: [],
  deleteVisa: [],
  getPackages: [],
  addProduct: [],
  getOrderList: [],
  getorderById: [],
  deleteRoom: null,
  visaGateways: [],
};

const landingManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROOM:
      return {
        ...state,
        getAllRoom: action.payload,
      };
    case GET_VISA:
      return {
        ...state,
        getVisa: action.payload,
      };
    case GET_PACKAGES:
      return {
        ...state,
        getPackages: action.payload,
      };
    case GET_PASSPORT:
      return {
        ...state,
        getPassport: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        addProduct: action.payload,
      };
    case ADD_ROOM:
      return {
        ...state,
        addRoom: action.payload,
      };
    case ADD_VISA:
      return {
        ...state,
        addVisa: action.payload,
      };
    case ADD_PASSPORT:
      return {
        ...state,
        addPassport: action.payload,
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
    case UPDATE_PASSPORT:
      return {
        ...state,
        updatePassport: action.payload,
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
    case DELETE_PASSPORT:
      return {
        ...state,
        deletePassport: action.payload,
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

    case "GET_VISA_GATEWAYS_SUCCESS":
      return { ...state, visaGateways: action.payload };
    case "ADD_VISA_GATEWAY_SUCCESS":
      return {
        ...state,
        visaGateways: Array.isArray(state.visaGateways)
          ? [...state.visaGateways, action.payload]
          : [action.payload],
      };
    case "DELETE_VISA_GATEWAY_SUCCESS":
      return {
        ...state,
        visaGateways: state.visaGateways.filter(
          (item) => item._id !== action.payload
        ),
      };
    case "EDIT_VISA_GATEWAY_SUCCESS":
      return {
        ...state,
        visaGateways: state.visaGateways.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };

    case RESET_GLOBAL_STATE:
      return initialState;
    default:
      return state;
  }
};

export default landingManagementReducer;
