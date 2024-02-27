import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackScreens } from "../../../App.screens";

export default function SearchCameraBar() {
  const { navigate } = useNavigation();
  const [searchPhrase, setSearchPhrase] = useState("");

  const handleCameraPress = () => {
    navigate(StackScreens.CameraComponent);
  };

  const handleClearSearch = () => {
    setSearchPhrase("");
  };

  const handleSearch = () => {
    if (searchPhrase.trim() !== "") {
      Keyboard.dismiss();
      navigate(StackScreens.SearchResultsPage, { searchPhrase });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Feather name="search" size={25} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Search for plants"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onSubmitEditing={handleSearch}
        />
        {searchPhrase !== "" && (
          <TouchableOpacity onPress={handleClearSearch}>
            <Entypo name="circle-with-cross" size={20} color="black" />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity onPress={handleCameraPress}>
        <Feather name="camera" size={28} color="black" margin={3} />
      </TouchableOpacity>
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
    borderRadius: 5,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    height: 15,
  },
});
