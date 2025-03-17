import {
  ApiDelete,
  ApiGet,
  ApiPost,
  ApiPut,
} from '../../helper/axios';
import { GET_CATEGORY, GET_TAG, GET_COUNTRY, UPDATE_PRODUCT, GET_INCLUDED, ADD_COUNTRY, DELETE_ROOM, DELETE_VISA, ADD_TAG, ADD_INCLUDED, ADD_CATEGORY, UPDATE_COUNTRY, UPDATE_VISA, UPDATE_ROOM, DELETE_PRODUCT, DELETE_COUNTRY} from '../type';

export const getPackageCategoryAction = () => {
  return (dispatch) => {
      return ApiGet(`/admin/categories`)
    .then((res) => {
      console.log('res', res);
      if (res.category) {
        dispatch({
          type: GET_CATEGORY,
          payload: res.category,
        });
        return res.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_CATEGORY,
        payload: error,
      });
    });
};
};


export const getIncludedAction = () => {
  return (dispatch) => {
      return ApiGet(`/admin/included`)
    .then((res) => {
      console.log('res', res);
      if (res.included) {
        dispatch({
          type: GET_INCLUDED,
          payload: res.included,
        });
        return res.included;
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_INCLUDED,
        payload: error,
      });
    });
};
};

export const getCountriesAction = () => {
return (dispatch) => {
    return ApiGet(`/admin/countries`)
  .then((res) => {
    console.log('ressdfg', res);
    if (res.country) {
      dispatch({
        type: GET_COUNTRY,
        payload: res.country,
      });
      return res.country;
    }
  })
  .catch((error) => {
    dispatch({
      type: GET_COUNTRY,
      payload: error,
    });
  });
};
};

export const getTagAction = () => {
  return (dispatch) => {
      return ApiGet(`/admin/tags`)
    .then((res) => {
      console.log('res', res);
      if (res.tag) {
        dispatch({
          type: GET_TAG,
          payload: res.tag,
        });
        return res.tag;
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_TAG,
        payload: error,
      });
    });
  };
  };


export const addIncluded = (name) => {
  return (dispatch) => {
      return ApiPost(`/admin/included`, {name})
    .then((res) => {
      console.log('res', res);
      if (res.data.included) {
        dispatch({
          type: ADD_INCLUDED,
          payload: res.data.included,
        });
        return res.data.included;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_INCLUDED,
        payload: error,
      });
    });
};
};

export const addPackageCategoryAction = (formData) => {
return (dispatch) => {
    return ApiPost(`/admin/category`, formData)
  .then((res) => {
    console.log('res', res);
    if (res.data.category) {
      dispatch({
        type: ADD_CATEGORY,
        payload: res.data.category,
      });
      return res.data.category;
    }
  })
  .catch((error) => {
    dispatch({
      type: ADD_CATEGORY,
      payload: error,
    });
  });
};
};

export const addCountryAction = (formData) => {
  return (dispatch) => {
      return ApiPost(`/admin/country`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.data.country) {
        dispatch({
          type: ADD_COUNTRY,
          payload: res.data.country,
        });
        return res.data.country;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_COUNTRY,
        payload: error,
      });
    });
  };
  };


export const addTagAction = (formData) => {
  return (dispatch) => {
      return ApiPost(`/admin/tag`, formData)
    .then((res) => {
      console.log('ressss', res);
      if (res.data.tag) {
        dispatch({
          type: ADD_TAG,
          payload: res.data.tag,
        });
        return res.data.tag;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_TAG,
        payload: error,
      });
    });
};
};

export const updateCountryAction = (countryId, formData) => {
  return (dispatch) => {
      return ApiPut(`/admin/country/${countryId}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.country) {
        dispatch({
          type: UPDATE_COUNTRY,
          payload: res.country,
        });
        return res.country;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_COUNTRY,
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

export const deleteCountryAction = (metalId) => {
  return (dispatch) => {
      return ApiDelete(`/admin/country/${metalId}`)
    .then((res) => {
      console.log('res', res);
      if (res.country) {
        dispatch({
          type: DELETE_COUNTRY,
          payload: res.country,
        });
        return res.country;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_COUNTRY,
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


