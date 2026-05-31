import React from "react";
import { View, Text, Button } from "react-native";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { clearName, setName } from "../store/userSlice";

export default function Home() {
  const dispatch = useAppDispatch();

  const name = useAppSelector(
    state => state.user.name
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{name}</Text>

      <Button
        title="Set Luiz"
        onPress={() =>
          dispatch(setName("Luiz"))
        }
      />

      <Button
        title="Clear"
        onPress={() =>
          dispatch(clearName())
        }
      />
    </View>
  );
}