import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const backgroundImage = require("../../../assets/plantsign.png");

export const SignupScreen = () => {
  const { navigate } = useNavigation();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = () => {};

  return (
    <ImageBackground
      resizeMode="stretch"
      source={backgroundImage}
      style={styles.background}
    >
      <View style={styles.container}>
        <View
          style={{
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 70,
          }}
        >
          <Text
            style={[
              styles.buddiesText,
              {
                marginBottom: 20,
              },
            ]}
          >
            Sign Up to{" "}
            <Text
              style={{
                color: "#3bb162",
                fontFamily: "GT-Eesti-Display-Medium-Trial",
              }}
            >
              Buddies!
            </Text>
          </Text>

          <TextInput
            placeholder="What's your name?"
            value={name}
            onChangeText={(text) => setName(text)}
            style={[styles.input, styles.roundedInput]}
          />
          <TextInput
            placeholder="What's your username?"
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={[styles.input, styles.roundedInput]}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={handleSignup}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.goToLoginContainer}>
          <TouchableOpacity onPress={() => navigate("Login")}>
            <Text style={styles.signupText}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    position: "relative",
    paddingBottom: 60,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#8fcbaf",
    width: 300,
    height: 50,
    fontFamily: "GT-Eesti-Display-Medium-Trial",
  },
  roundedInput: {
    borderRadius: 25,
    backgroundColor: "#def2e6",
  },
  button: {
    marginBottom: -40,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 25,
    borderRadius: 35,
    marginVertical: 12,
    minWidth: 150,
  },
  loginButton: {
    marginBottom: -110,
    backgroundColor: "#1a6a45",
    position: "absolute",
    bottom: 320,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "GT-Eesti-Display-Medium-Trial",
  },
  buddiesText: {
    marginVertical: 190,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "GT-Eesti-Display-Medium-Trial",
  },
  signupText: {
    color: "#136f44",
    fontSize: 17,
    marginVertical: 90,
    alignItems: "center",
    marginBottom: -110,
    fontFamily: "GT-Eesti-Display-Medium-Trial",
  },
  goToLoginContainer: {
    position: "absolute",
    bottom: 250,
    left: "62%",
    marginLeft: -80,
    fontFamily: "GT-Eesti-Display-Medium-Trial",
  },
});
