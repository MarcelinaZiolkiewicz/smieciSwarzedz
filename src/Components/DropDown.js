import React, { useState } from "react";
import {
  Center,
  CheckIcon,
  FormControl,
  Select,
  WarningOutlineIcon,
} from "native-base";
import { useDispatch } from "react-redux";
import {
  SET_SELECTED_ADDRESS,
  SET_SELECTED_CITY,
  SET_SELECTED_STREET,
} from "../store/types";

const DropDown = ({ name, data, label, type }) => {
  let [service, setService] = useState(null);
  const dispatch = useDispatch();

  console.log("Miasta");
  console.log(data);
  console.log(service);

  const setSelectedValue = (type, val) => {
    console.log(type);

    if (type === "CITY") {
      dispatch({ type: SET_SELECTED_CITY, payload: val });
    }
    if (type === "STREET") {
      dispatch({ type: SET_SELECTED_STREET, payload: val });
    }
    if (type === "ADDRESS") {
      dispatch({ type: SET_SELECTED_ADDRESS, payload: val });
    }
  };

  return (
    <Center>
      <FormControl w="3/4" maxW="300" isRequired>
        <FormControl.Label paddingTop="5">{label}</FormControl.Label>
        <Select
          selectedValue={service}
          minWidth="200"
          accessibilityLabel={name}
          placeholder={name}
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />,
          }}
          mt="1"
          onValueChange={(itemValue) => {
            setSelectedValue(type, itemValue);
            setService(itemValue);
            console.log(itemValue);
          }}
        >
          {Array.isArray(data) &&
            data.length &&
            data.map((item) => (
              <Select.Item key={item.id} label={item.value} value={item.id} />
            ))}
        </Select>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Uzupełnij dane
        </FormControl.ErrorMessage>
      </FormControl>
    </Center>
  );
};

export default DropDown;
