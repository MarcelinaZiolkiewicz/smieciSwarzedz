import {
  GET_ADDRESSES,
  GET_DATA,
  GET_STREETS,
  LOADED_ADDRESSES_FAIL,
  LOADED_ADDRESSES_SUCCESS,
  LOADED_FAIL,
  LOADED_STREETS_FAIL,
  LOADED_STREETS_SUCCESS,
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

    case GET_STREETS:
      return {
        ...state,
        loading: true,
        error: null,
        streets: [],
      };

    case LOADED_STREETS_SUCCESS:
      return {
        ...state,
        loading: false,
        streets: action.payload,
      };

    case LOADED_STREETS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_ADDRESSES:
      return {
        ...state,
        loading: true,
        error: null,
        addresses: [],
      };

    case LOADED_ADDRESSES_SUCCESS:
      return {
        ...state,
        loading: false,
        addresses: action.payload,
      };

    case LOADED_ADDRESSES_FAIL:
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
