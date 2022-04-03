import React, { useEffect } from "react";
import { NativeBaseProvider, Text } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { getCities } from "./src/store/actions";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SetAddress from "./src/screens/SetAddress";
import GarbageDate from "./src/screens/GarbageDate";

const Stack = createNativeStackNavigator();

export default function App() {
  const dispatch = useDispatch();

  const cities = useSelector(({ cities }) => cities.cities);

  useEffect(() => {
    dispatch(getCities());
  }, []);

  return (
    <NativeBaseProvider>
      <Stack.Navigator initialRouteName="Adres">
        <Stack.Screen name="Adres" component={SetAddress} />
        <Stack.Screen name="Wywozy" component={GarbageDate} />
      </Stack.Navigator>
    </NativeBaseProvider>
  );
}
