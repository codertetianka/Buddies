import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { StackScreens } from "../../../App.screens";
import SearchCameraBar from "../Components/SearchCameraBar";
import { FindMatchingPlants } from "./FindMatchingPlants";

export const IdentifiedScreen = ({ route }) => {
  const { navigate } = useNavigation();
  const { imageUrl, suggestions, dateTaken } = route.params;

  const handleAddPlant = (scientificName) => {
    // getting invalid hooks call error when pressing +
    // console.log(scientificName); //works!
    // console.log(imageUrl, "<<< Image"); // works!
    // console.log(dateTaken, "<<< Date taken"); // works!
    const foundPlant = FindMatchingPlants(scientificName);
    // maybe use these if statements to create alerts that the plant has been added to their profile or not?
    if (foundPlant !== null) {
    } else {
      console.log("Plant not found with scientific name:", scientificName);
    }

    // Call the FindMatchingPlant - filter the response to only include the plant with the same scientific name
    // create object with imageUrl, date taken, watering and sun info
    // send selected plant info object to firebase database (map in firebase equv to obj)
    // navigate to plant profile - errors for some reason when we change to plant profile
    navigate(StackScreens.UserProfileScreen);
  };

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../../assets/splash.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.text}>We think we have a match!</Text>
          <Text>If not, try searching again:</Text>
          <SearchCameraBar />
          <Image
            source={{ uri: imageUrl }}
            style={{ width: 150, height: 150 }}
          />
          <Text>Date Taken: {dateTaken}</Text>
          <Text>Suggested Plants:</Text>
          <ScrollView style={styles.scrollView}>
            {suggestions.map((suggestion) => {
              return (
                <View key={suggestion.id}>
                  <Image
                    source={{ uri: suggestion.similar_images[0].url_small }}
                    style={{ width: 100, height: 100 }}
                  />
                  <Text>
                    Scientific Name: {suggestion.plant_details.scientific_name}
                  </Text>
                  <Text>
                    Common Name: {suggestion.plant_details.common_names[0]}
                  </Text>
                  <Text>Probability: {suggestion.probability}</Text>
                  <View>
                    <Feather
                      name="plus-square"
                      size={20}
                      color="black"
                      style={{ marginLeft: 1 }}
                      onPress={() =>
                        handleAddPlant(suggestion.plant_details.scientific_name)
                      } // change to handle adding to profile
                    />
                  </View>
                </View>
              );
            })}
          </ScrollView>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigate(StackScreens.Login)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Back to Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontFamily: "GT-Eesti-Display-Bold-Trial",
    marginBottom: 20,
    color: "#000",
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "#1a6a45",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "GT-Eesti-Display-Bold-Trial",
  },
  scrollView: {
    marginHorizontal: 5,
  },
});
