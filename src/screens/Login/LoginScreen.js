import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackScreens } from "../../../App.screens";
export const LoginScreen = () => {
  const { navigate } = useNavigation();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = () => {
    // will add login logic here
    setIsLoggingIn(true);
    // authentication will be here
    setTimeout(() => {
      setIsLoggingIn(false);
      // when login is successful it will go here
      navigate(StackScreens.UserProfileScreen);
    }, 2000);
  };

  const handleSignup = () => {
    // signup logic will go here
    console.log("Signing up:", { name, username });
    navigate(StackScreens.SignupScreen); // will navigate to SignupScreen after sign up as well
  };

  return (
    <KeyboardAvoidingView behavior={"height"} style={{ flex: 1 }}>
      <ImageBackground
        resizeMode="stretch"
        source={require("../../../assets/planttwo.png")}
        style={[
          styles.background,
          { backgroundColor: "rgba(255, 255, 255, 0.5)" },
        ]}
      >
        <View style={styles.container}>
          <Text
            style={[
              styles.buddiesText,
              { fontFamily: "GT-Eesti-Display-Medium-Trial" },
              { fontSize: 36 },
            ]}
          >
            Welcome back to your{" "}
            <Text style={{ color: "hsla(140, 37%, 52%, 1)" }}>Buddies!</Text>
          </Text>

          <TextInput
            placeholder="Username"
            value={name}
            onChangeText={(text) => setName(text)}
            style={[styles.input, styles.roundedInput]}
            maxLength={50}
          />
          <TextInput
            placeholder="Password"
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={[styles.input, styles.roundedInput]}
            maxLength={50}
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={[styles.button, styles.loginButton]}
            onPress={handleLogin}
            disabled={isLoggingIn}
          >
            <Text style={styles.buttonText}>
              {isLoggingIn ? "Logging in..." : "Log In"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.signupText}>
              <Text style={{ color: "#000" }}>Don't have an account?</Text>{" "}
              <Text style={{ color: "#1a6a45" }}>Sign Up here</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "red", marginTop: 40 }]}
            onPress={() => navigate(StackScreens.UserProfileScreen)}
          >
            <Text style={styles.buttonText}>
              Go to User Page(all screens are there)
            </Text>
          </TouchableOpacity>

          {/* <Text
          style={[
            styles.tipText,
            { fontFamily: "GT-Eesti-Text-UltraLight-Trial" },
          ]}
        >
          Tip: Press the camera icon in the search bar to identify your plant!🌱
        </Text> */}
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    paddingHorizontal: 20,
    paddingTop: 380,
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
  buddiesText: {
    marginBottom: 45,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
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
    backgroundColor: "#1a6a45",
  },
  signupText: {
    fontSize: 17,
    marginVertical: 90,
    marginBottom: -20,
    fontFamily: "GT-Eesti-Display-Medium-Trial",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "GT-Eesti-Display-Medium-Trial",
  },
});
