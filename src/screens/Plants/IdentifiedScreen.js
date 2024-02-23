import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { StackScreens } from "../../../App.screens";

export const IdentifiedScreen = ({ route }) => {
  const { navigate } = useNavigation();
  const { image, suggestions, dateTaken } = route.params;
  console.log(suggestions, "<<< Suggestions");
  console.log(suggestions[0].plant_details, "<<< First Suggestion");
  console.log(
    suggestions[0].plant_details.structured_name,
    "<<< First Suggestion"
  );
  console.log(image, "<<< Image");
  console.log(dateTaken, "<< Date Taken");

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../../assets/splash.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.text}>Indentified Plant Profile Screen</Text>

          <Image source={image} />
          <Text>Date Taken: {dateTaken}</Text>
          <Text>Suggested Plants:</Text>
          <View>
            {suggestions.map((suggestion) => {
              return (
                <View key={suggestion.id}>
                  <Text>
                    Scientific Name: {suggestion.plant_details.scientific_name}
                  </Text>
                  <Text>Probability: {suggestion.probability}</Text>
                  <View>
                    <Feather
                      name="plus-square"
                      size={20}
                      color="black"
                      style={{ marginLeft: 1 }}
                      // onPress={handleCameraPress} // change to handle adding to profile
                    />
                  </View>
                </View>
              );
            })}
          </View>

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
});
