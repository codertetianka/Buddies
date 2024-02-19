import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  // ImageBackground, uncomment to see the background idea and comment out background color
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";

export const HomeScreen = () => {
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
      navigate("SignupScreen"); // navigate to SignupScreen after login
    }, 2000);
  };

  const handleSignup = () => {
    // signup logic will go here
    console.log("Signing up:", { name, username });
    navigate("SignupScreen"); // will navigate to SignupScreen after sign up as well
  };

  return (
    // <ImageBackground
    //   resizeMode="stretch"
    //   source={require("../../../images/plant.png")}
    //   style={styles.background}
    // >
    <View style={styles.container}>
      <Text style={styles.buddiesText}>
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

      <Text style={styles.orText}>Or</Text>

      <TouchableOpacity onPress={handleSignup}>
        <Text style={styles.signupText}>
          <Text style={{ color: "#000" }}>Don't have an account?</Text>{" "}
          <Text style={{ color: "#1a6a45" }}>Sign Up here</Text>
        </Text>
      </TouchableOpacity>

      <Text style={styles.tipText}>
        Tip: Press the camera icon in the search bar to identify your plant!🌱
      </Text>
    </View>
    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#8fcbaf",
    width: 250,
  },
  roundedInput: {
    borderRadius: 25,
    backgroundColor: "#def2e6",
  },
  orText: {
    marginVertical: 10,
  },
  tipText: {
    marginTop: 40,
    paddingHorizontal: 20,
    fontSize: 12,
    color: "#666",
  },
  buddiesText: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    marginVertical: 10,
    minWidth: 150,
  },
  loginButton: {
    backgroundColor: "#1a6a45",
  },
  signupText: {
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
