import {
  GET_DATA,
  LOADED_SUCCESS,
  LOADED_FAIL,
  LOADED_STREETS_SUCCESS,
  LOADED_STREETS_FAIL,
  LOADED_ADDRESSES_SUCCESS,
  LOADED_ADDRESSES_FAIL,
  GET_ADDRESSES,
  GET_STREETS,
  GET_EXPORTS,
  LOADED_EXPORTS_SUCCESS,
  LOADED_EXPORTS_FAIL,
} from "./types";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveDataToAsyncStoreage = async (name, data) => {
  console.log(name, data);

  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(name, jsonValue);
    console.log("Succesfully saved");
  } catch (error) {
    // Error saving data
    console.log("Error while saving");
  }
};

export const readDataFromAsync = async (name) => {
  try {
    const value = await AsyncStorage.getItem(name);
    if (value !== null) {
      // Our data is fetched successfully
      console.log("Successfully loaded");
      console.log(value);
    }
  } catch (error) {
    console.log("Error while reading");
    // Error retrieving data
  }
};

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

export const getStreets = () => (dispatch, getState) => {
  const {
    cities: { selectedCity },
  } = getState();

  dispatch({ type: GET_STREETS });
  axios
    .get(
      `https://fbserwis-harmonogram.smok.net.pl/addresses/streets/${selectedCity}`
    )
    .then((res) => {
      dispatch(fetchStreetsSuccess(res.data));
    })
    .catch((error) => {
      dispatch(fetchStreetsFail(error.message));
    });
};

export const getAddresses = () => (dispatch, getState) => {
  const {
    cities: { selectedCity, selectedStreet },
  } = getState();

  dispatch({ type: GET_ADDRESSES });
  axios
    .get(
      `https://fbserwis-harmonogram.smok.net.pl/addresses/numbers/${selectedCity}/${selectedStreet}`
    )
    .then((res) => {
      dispatch(fetchAddressesSuccess(res.data));
    })
    .catch((error) => {
      dispatch(fetchAddressesFail(error.message));
    });
};

export const getExports = () => (dispatch, getState) => {
  const {
    cities: { selectedCity, selectedStreet, selectedAddresses },
  } = getState();

  dispatch({ type: GET_EXPORTS });
  axios
    .get(
      `https://fbserwis-harmonogram.smok.net.pl/addresses/numbers/${selectedCity}/${selectedStreet}`
    )
    .then((res) => {
      dispatch(fetchExportsSuccess(res.data));
    })
    .catch((error) => {
      dispatch(fetchExportsFail(error.message));
    });
};

const fetchExportsSuccess = (exports) => {
  return {
    type: LOADED_EXPORTS_SUCCESS,
    payload: exports,
  };
};

const fetchExportsFail = (error) => {
  return {
    type: LOADED_EXPORTS_FAIL,
    payload: error,
  };
};

const fetchCitiesSuccess = (cities) => {
  return {
    type: LOADED_SUCCESS,
    payload: cities,
  };
};

const fetchCitiesFail = (error) => {
  return {
    type: LOADED_FAIL,
    payload: error,
  };
};

const fetchStreetsSuccess = (streets) => {
  return {
    type: LOADED_STREETS_SUCCESS,
    payload: streets,
  };
};

const fetchStreetsFail = (error) => {
  return {
    type: LOADED_STREETS_FAIL,
    payload: error,
  };
};

const fetchAddressesSuccess = (addresses) => {
  return {
    type: LOADED_ADDRESSES_SUCCESS,
    payload: addresses,
  };
};

const fetchAddressesFail = (error) => {
  return {
    type: LOADED_ADDRESSES_FAIL,
    payload: error,
  };
};
