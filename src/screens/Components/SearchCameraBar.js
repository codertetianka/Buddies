import CameraComponent from "./CameraComponent";
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function SearchCameraBar() {
  const { navigate } = useNavigation();
  const [clicked, setClicked] = useState(false);
  //searchPhrase will probs need to be moved higher and passed down as a prop
  const [searchPhrase, setSearchPhrase] = useState("");

  const handleCameraPress = () => {
    //pressing the camera feather navigates to camera component
    navigate("CameraComponent");
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Feather name="search" size={25} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            // setClicked(true);
          }}
        />
        {clicked && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setSearchPhrase("");
            }}
          />
        )}
      </View>

      {clicked && (
        <View>
          {/* <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
            style={{
              backgroundColor: "skyblue",
              padding: 10,
              borderRadius: 5,
              marginRight: 35,
            }}
          ></Button> */}
        </View>
      )}
      <View>
        <Feather
          name="camera"
          size={30}
          color="black"
          style={{ marginLeft: 1 }}
          onPress={handleCameraPress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#def2e6",
    borderRadius: 25,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    height: 40,
  },
  clearButton: {
    marginLeft: 80,
  },
  cameraIcon: {
    marginLeft: 10,
  },
});
