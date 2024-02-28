import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import SearchCameraBar from "../Components/SearchCameraBar";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../../../context/UserContext";
import { StackScreens } from "../../../App.screens";
import { Feather } from "@expo/vector-icons";

export const IdentifiedScreen = ({ route }) => {
  const { navigate } = useNavigation();
  const { savedImageUrl, suggestions, dateTaken } = route.params;
  const { loggedInUser } = useContext(UserContext);
  const [foundPlant, setFoundPlant] = useState(null);

  useEffect(() => {
    if (foundPlant) {
      handleAddPlant(foundPlant, dateTaken, savedImageUrl);
      navigate(StackScreens.UserProfileScreen);
    }
  }, [foundPlant, dateTaken, savedImageUrl, navigate]);

  const handleAddPlant = async (newPlant, photoDate, newPhoto) => {
    // Function to handle adding the plant to user's profile
    // This function is unchanged from your original code
  };

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../../images/bg4.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.text}>Top results</Text>
          <View style={styles.lightGreenContainer}>
            <View style={styles.photoContainer}>
              <Image source={{ uri: savedImageUrl }} style={styles.photo} />
              <Text style={styles.dateText}>Date Taken: {dateTaken}</Text>
            </View>
          </View>
          <Text>Not your plant? Try searching again</Text>
          <Text>Suggested Plants:</Text>
          <ScrollView style={styles.scrollView}>
            {/* Mapping through suggestions */}
          </ScrollView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigate(StackScreens.CameraComponent)}
              style={styles.button}
            >
              <Feather name="camera" size={24} color="white" />
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
    color: "#1A6A45",
  },
  lightGreenContainer: {
    /* Added */ backgroundColor: "#def2e6",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  photoContainer: {
    alignItems: "center",
  },
  photo: {
    width: 250,
    height: 280,
    resizeMode: "cover",
    borderRadius: 8,
  },
  dateText: {
    marginTop: 5,
    color: "#1A6A45",
    fontSize: 16,
    fontFamily: "GT-Eesti-Display-Bold-Trial",
  },
  scrollView: {
    marginHorizontal: 5,
    marginBottom: 10,
  },
  suggestionContainer: {
    marginBottom: 10,
    alignItems: "center",
  },
  suggestionImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 5,
  },
  suggestionText: {
    textAlign: "center",
    color: "#1A6A45",
    fontFamily: "GT-Eesti-Display-Bold-Trial",
  },
  addText: {
    color: "#1A6A45",
    textDecorationLine: "underline",
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "#1A6A45",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "GT-Eesti-Display-Bold-Trial",
  },
});
