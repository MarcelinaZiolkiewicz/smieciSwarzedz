import {
  GET_DATA,
  LOADED_FAIL,
  LOADED_SUCCESS,
  SET_SELECTED_ADDRESS,
  SET_SELECTED_CITY,
  SET_SELECTED_STREET,
} from "./types";

const initialState = {
  cities: [],
  streets: [],
  addresses: [],
  selectedCity: null,
  selectedStreet: null,
  selectedAddress: null,
  loading: false,
  error: null,
};

export const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        loading: true,
        error: null,
        cities: [],
      };

    case LOADED_SUCCESS:
      return {
        ...state,
        loading: false,
        cities: action.payload,
      };

    case LOADED_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SET_SELECTED_CITY:
      console.log(action.payload);
      return {
        ...state,
        selectedCity: action.payload,
      };

    case SET_SELECTED_STREET:
      return {
        ...state,
        selectedStreet: action.payload,
      };

    case SET_SELECTED_ADDRESS:
      return {
        ...state,
        selectedAddress: action.payload,
      };

    default:
      return state;
  }
};
