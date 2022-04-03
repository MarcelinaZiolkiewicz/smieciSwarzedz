/**
 * @format
 */
import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import store from "./src/store/store";
import { NavigationContainer } from "@react-navigation/native";

export default function Main() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Main);
