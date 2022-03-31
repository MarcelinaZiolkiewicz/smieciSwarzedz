import { GET_DATA, LOADED_SUCCESS, LOADED_FAIL } from "./types";
import axios from "axios";

export const getCities = () => (dispatch) => {
  dispatch({ type: GET_DATA });
  axios
    .get(`https://fbserwis-harmonogram.smok.net.pl/addresses/cities`)
    .then((res) => {
      dispatch(fetchCitiesSuccess(res.data));
    })
    .catch((error) => {
      dispatch(fetchCitiesFail(error.message));
    });
};

export const getStreets = (id) => (dispatch) => {
  dispatch({ type: GET_DATA });
  axios
    .get(`https://fbserwis-harmonogram.smok.net.pl/addresses/streets/${id}`)
    .then((res) => {
      dispatch(fetchCitiesSuccess(res.data));
    })
    .catch((error) => {
      dispatch(fetchCitiesFail(error.message));
    });
};

export const fetchCitiesSuccess = (cities) => {
  return {
    type: LOADED_SUCCESS,
    payload: cities,
  };
};
export const fetchCitiesFail = (error) => {
  return {
    type: LOADED_FAIL,
    payload: error,
  };
};
