import React, { useEffect } from "react";
import SetAddress from "./src/screens/SetAddress";
import { NativeBaseProvider } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { getCities } from "./src/store/actions";

export default function App() {
  const dispatch = useDispatch();

  const cities = useSelector(({ cities }) => cities.cities);
  // const loading = useSelector(({ news }) => news.loading);

  useEffect(() => {
    dispatch(getCities());
    console.log("Miasta w app");
    console.log(cities);
  }, []);

  return (
    <NativeBaseProvider>
      <SetAddress />
    </NativeBaseProvider>
  );
}
