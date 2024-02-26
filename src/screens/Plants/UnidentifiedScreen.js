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
import SearchCameraBar from "../Components/SearchCameraBar";
import { StackScreens } from "../../../App.screens";

export const UnidentifiedScreen = () => {
  const { navigate } = useNavigation();

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../../images/bg4.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <SearchCameraBar />
        <Image
          style={styles.img}
          resizeMode="contain"
          source={require("../../../images/sad.png")}
        />
        <View style={styles.overlay}>
          <Text style={styles.text}>
            Ugh oh, we couldn't identify your plant!
          </Text>
          <Text style={styles.textBottom}>
            Try searching for your plant or taking another photo!
          </Text>

          {/* <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => navigate(StackScreens.Login)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Back to Login</Text>
              </TouchableOpacity>
            </View> */}
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontFamily: "GT-Eesti-Display-Bold-Trial",
    marginTop: -330,
    padding: 7,
    marginBottom: 120,
    marginLeft: 25,
    color: "#000",
    alignItems: "center",
    backgroundColor: "white",
  },
  textBottom: {
    fontSize: 24,
    marginTop: -100,
    fontFamily: "GT-Eesti-Display-Bold-Trial",
    margin: 25,
    color: "#1a6a45",
    alignItems: "center",
    backgroundColor: "#def2e6",
    padding: 7,
  },
  // buttonContainer: {
  //   marginTop: 20,
  // },
  // button: {
  //   backgroundColor: "#1a6a45",
  //   paddingVertical: 12,
  //   paddingHorizontal: 24,
  //   borderRadius: 25,
  // },
  // buttonText: {
  //   color: "#ffffff",
  //   fontSize: 16,
  //   fontFamily: "GT-Eesti-Display-Bold-Trial",
  // },
  img: {
    marginTop: 20,
    width: 190,
    height: 230,
  },
});
