import {
  ApiDelete,
  ApiGet,
  ApiPost,
  ApiPut,
} from '../../helper/axios';
import { GET_ROOM, GET_PACKAGES, GET_PASSPORT, UPDATE_PRODUCT, GET_VISA, ADD_PRODUCT, DELETE_ROOM, DELETE_VISA, ADD_ROOM, ADD_VISA, ADD_PASSPORT, UPDATE_PASSPORT, UPDATE_VISA, UPDATE_ROOM, DELETE_PRODUCT, DELETE_PASSPORT} from '../type';

export const getRoomsAction = () => {
  return (dispatch) => {
      return ApiGet(`/admin/rooms`)
    .then((res) => {
      console.log('res', res);
      if (res.room) {
        dispatch({
          type: GET_ROOM,
          payload: res.room,
        });
        return res.room;
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_ROOM,
        payload: error,
      });
    });
};
};

export const getVisaEnquiryByCountryAction = (countryId) => {
  return (dispatch) => {
      return ApiGet(`/admin/visa-by-country/${countryId}`)
    .then((res) => {
      console.log('response of visa', res);
      if (res.visa) {
        dispatch({
          type: GET_VISA,
          payload: res.visa,
        });
        return res.visa;
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_VISA,
        payload: error,
      });
    });
};
};

export const getPassportAction = () => {
return (dispatch) => {
    return ApiGet(`/admin/passport-inquiries`)
  .then((res) => {
    console.log('ressdfg', res);
    if (res.room) {
      dispatch({
        type: GET_PASSPORT,
        payload: res.room,
      });
      return res.room;
    }
  })
  .catch((error) => {
    dispatch({
      type: GET_PASSPORT,
      payload: error,
    });
  });
};
};

export const getPackagesAction = () => {
  return (dispatch) => {
      return ApiGet(`/admin/packages`)
    .then((res) => {
      console.log('res', res);
      if (res.packages) {
        dispatch({
          type: GET_PACKAGES,
          payload: res.packages,
        });
        return res.packages;
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_PACKAGES,
        payload: error,
      });
    });
  };
  };


export const addVisa = (formData) => {
  return (dispatch) => {
      return ApiPost(`/admin/visa-enquiry`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.data.inquiry) {
        dispatch({
          type: ADD_VISA,
          payload: res.data.inquiry,
        });
        return res.data.inquiry;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_VISA,
        payload: error,
      });
    });
};
};

export const addPassportAction = (formData) => {
return (dispatch) => {
    return ApiPost(`/admin/passport-inquiry`, formData)
  .then((res) => {
    console.log('res', res);
    if (res.data.data) {
      dispatch({
        type: ADD_PASSPORT,
        payload: res.data.data,
      });
      return res.data.data;
    }
  })
  .catch((error) => {
    dispatch({
      type: ADD_PASSPORT,
      payload: error,
    });
  });
};
};

export const addProductAction = (formData) => {
  return (dispatch) => {
      return ApiPost(`/admin/product`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.data.product) {
        dispatch({
          type: ADD_PRODUCT,
          payload: res.data.product,
        });
        return res.data.product;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_PRODUCT,
        payload: error,
      });
    });
  };
  };


export const addRoomAction = (roomData) => {
  return (dispatch) => {
      return ApiPost(`/admin/room`, roomData)
    .then((res) => {
      console.log('ressss', res);
      if (res.data.room) {
        dispatch({
          type: ADD_ROOM,
          payload: res.data.room,
        });
        return res.data.room;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_ROOM,
        payload: error,
      });
    });
};
};

export const updatePassportAction = (passportId, formData) => {
  return (dispatch) => {
      return ApiPut(`/admin/passport-inquiry/${passportId}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.room) {
        dispatch({
          type: UPDATE_PASSPORT,
          payload: res.room,
        });
        return res.room;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_PASSPORT,
        payload: error,
      });
    });
};
};

export const updateVisaAction = (visaId, formData) => {
return (dispatch) => {
    return ApiPut(`/admin/visa-enquiry/${visaId}`, formData)
  .then((res) => {
    console.log('res', res);
    if (res.inquiry) {
      dispatch({
        type: UPDATE_VISA,
        payload: res.inquiry,
      });
      return res.inquiry;
    }
  })
  .catch((error) => {
    dispatch({
      type: UPDATE_VISA,
      payload: error,
    });
  });
};
};

export const updateRoomAction = (roomId, formData) => {
  return (dispatch) => {
      return ApiPut(`/admin/room/${roomId}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.room) {
        dispatch({
          type: UPDATE_ROOM,
          payload: res.room,
        });
        return res.room;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_ROOM,
        payload: error,
      });
    });
};
};

export const updateProductAction = (productId) => {
  return (dispatch) => {
      return ApiPut(`/admin/product/${productId}`)
    .then((res) => {
      console.log('res', res);
      if (res.product) {
        dispatch({
          type: UPDATE_PRODUCT,
          payload: productId,
        });
        return res.product;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_PRODUCT,
        payload: error,
      });
    });
};
};

export const deleteProductAction = (productId) => {
  return (dispatch) => {
      return ApiDelete(`/admin/product/${productId}`)
    .then((res) => {
      console.log('res', res);
      if (res.product) {
        dispatch({
          type: DELETE_PRODUCT,
          payload: productId,
        });
        return res.product;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: error,
      });
    });
};
};

export const deletePassportAction = (passportId) => {
  return (dispatch) => {
      return ApiDelete(`/admin/passport-inquiry/${passportId}`)
    .then((res) => {
      console.log('res', res);
      if (res.room) {
        dispatch({
          type: DELETE_PASSPORT,
          payload: res.room,
        });
        return res.room;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_PASSPORT,
        payload: error,
      });
    });
};
};

export const deleteVisaAction = (visaId) => {
return (dispatch) => {
    return ApiDelete(`/admin/visa-enquiry/${visaId}`)
  .then((res) => {
    console.log('res', res);
    if (res.inquiry) {
      dispatch({
        type: DELETE_VISA,
        payload: res.inquiry,
      });
      return res.inquiry;
    }
  })
  .catch((error) => {
    dispatch({
      type: DELETE_VISA,
      payload: error,
    });
  });
};
};

export const deleteRoomAction = (roomId) => {
return (dispatch) => {
    return ApiDelete(`/admin/room/${roomId}`)
  .then((res) => {
    console.log('Api delete category', res);
    if (res.room) {
      dispatch({
        type: DELETE_ROOM,
        payload: res.room,
      });
      return res.room;
    }
  })
  .catch((error) => {
    dispatch({
      type: DELETE_ROOM,
      payload: error,
    });
  });
};
};

export const getVisaGateways = () => async (dispatch) => {
    try {
        const data = await ApiGet("/admin/visa-gateway");
        dispatch({ type: "GET_VISA_GATEWAYS_SUCCESS", payload: data });
    } catch (error) {
        console.error("Error fetching visa getaways:", error);
    }
};

export const addVisaGateway = (formData) => async (dispatch) => {
    try {
        const { data } = await ApiPost("/admin/visa-gateway", formData);
        dispatch({ type: "ADD_VISA_GATEWAY_SUCCESS", payload: data });
        return data;
    } catch (error) {
        console.error("Error adding visa getaway:", error);
    }
};

export const deleteVisaGateway = (id) => async (dispatch) => {
    try {
        await ApiDelete(`/admin/visa-gateway/${id}`);
        dispatch({ type: "DELETE_VISA_GATEWAY_SUCCESS", payload: id });
    } catch (error) {
        console.error("Error deleting visa getaway:", error);
    }
};

export const editVisaGateway = (id, formData) => async (dispatch) => {
    try {
        const { data } = await axios.put(`/admin/visa-gateway/${id}`, formData);
        dispatch({ type: "EDIT_VISA_GATEWAY_SUCCESS", payload: data });
    } catch (error) {
        console.error("Error editing visa getaway:", error);
    }
};
