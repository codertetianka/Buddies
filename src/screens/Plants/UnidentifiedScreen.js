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
      <View style={styles.overlay}>
        <SearchCameraBar />

        <View style={styles.container}>
          <View style={styles.content}>
            <Image
              style={styles.img}
              resizeMode="contain"
              source={require("../../../images/sad.png")}
            />

            <Text style={styles.text}>
              Ugh oh, we couldn't identify your plant!
            </Text>
            <Text style={styles.textBottom}>
              Try searching for your plant or taking another photo!
            </Text>
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
    backgroundColor: "rgba(255, 255, 255, 0.85)",
  },
  content: {
    alignItems: "center",
    marginBottom: "75%",
  },
  text: {
    fontSize: 25,
    fontFamily: "GT-Eesti-Display-Bold-Trial",
    marginTop: 15,
    padding: 7,
    marginBottom: 10,
    color: "#000",
    textAlign: "center",
  },
  textBottom: {
    fontSize: 20,
    marginTop: 15,
    fontFamily: "GT-Eesti-Display-Bold-Trial",
    color: "#1a6a45",
    backgroundColor: "#def2e6",
    padding: 7,
    textAlign: "center",
  },
  img: {
    marginTop: 10,
    width: 190,
    height: 190,
  },
});
