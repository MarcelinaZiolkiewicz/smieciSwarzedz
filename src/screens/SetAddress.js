import React, { useState } from "react";
import { Checkbox, Box, Center, Button } from "native-base";
import DropDown from "../Components/DropDown";
import { useSelector } from "react-redux";
import { readDataFromAsync, saveDataToAsyncStoreage } from "../store/actions";

const SetAddress = ({ navigation }) => {
  const [saveAddress, setSaveAddress] = useState("");

  const cities = useSelector(({ cities }) => cities.cities);
  const selectedCity = useSelector(({ cities }) => cities.selectedCity);
  const streets = useSelector(({ cities }) => cities.streets);
  const addresses = useSelector(({ cities }) => cities.addresses);

  const handleSaveAddress = () => {
    if (saveAddress) {
      let index = cities.findIndex((item) => item.id === selectedCity);
      let selected = cities[index];
      saveDataToAsyncStoreage("city", selected);
      console.log("saving");
      navigation.navigate("Wywozy");
    }
  };

  const validate = () => {
    console.log("Sprawdzamy dane");
  };

  const handleLoadData = () => {
    readDataFromAsync("city");
  };

  return (
    <Center>
      <Box
        alignSelf="center"
        bg="primary.600"
        p="5"
        width="100%"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          letterSpacing: "lg",
        }}
      >
        Wybierz swój adres
      </Box>
      <Box>
        <Center>
          {cities.length > 0 && (
            <DropDown
              name="Miasto"
              label="Wybierz miasto"
              data={cities}
              type="CITY"
            />
          )}
          {streets.length > 0 && (
            <DropDown
              name="Ulica"
              label="Wybierz ulicę"
              data={streets}
              type="STREET"
            />
          )}
          {addresses.length > 0 && (
            <DropDown
              name="Adres"
              label="Wybierz adres"
              data={addresses}
              type="ADDRESS"
            />
          )}
        </Center>
        <Box marginTop="10">
          <Checkbox
            value="one"
            my={2}
            onChange={(item) => {
              setSaveAddress(item);
            }}
          >
            Zapisz adres
          </Checkbox>
          <Button
            onPress={() => handleSaveAddress()}
            bg="primary.600"
            width="100%"
            _text={{
              fontSize: "md",
              fontWeight: "medium",
              color: "warmGray.50",
              letterSpacing: "lg",
            }}
          >
            Szukaj
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default SetAddress;
