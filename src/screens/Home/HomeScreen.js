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
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore"

export const HomeScreen = () => {
  const { navigate } = useNavigation();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async () => {
    const q = query(collection(db, "users"), where("username", "==", username));
    try {
      const snapshot = await getDocs(q)
    snapshot.forEach((doc) => {
    // console.log(doc.id, '=>', doc.data())
    const userdata = doc.data()
    if (userdata.username) {
      console.log('will navigate to profile')
    }
    })
    setUsername('')
    console.log('random console log')
  }
catch (err) {
  console.log(err)
}
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
    navigate("SignupScreen"); // will navigate to SignupScreen after sign up as well
  };

  return (
    <ImageBackground
      resizeMode="stretch"
      source={require("../../../images/art.png")}
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
            { fontSize: 30 },
          ]}
        >
          Welcome back to your{" "}
          <Text style={{ color: "hsla(140, 37%, 52%, 1)" }}>Buddies!</Text>
        </Text>

        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={[styles.input, styles.roundedInput]}
          maxLength={50}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(password) => setPassword(password)}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontFamily: "GT-Eesti-Display-Medium-Italic-Trial",
  },
  roundedInput: {
    borderRadius: 25,
    backgroundColor: "#def2e6",
  },
  orText: {
    marginVertical: 10,
    fontFamily: "GT-Eesti-Display-Light-Trial",
  },
  tipText: {
    marginTop: 40,
    paddingHorizontal: 20,
    fontSize: 12,
    color: "#666",
    fontFamily: "GT-Eesti-Display-Medium-Trial",
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
    fontFamily: "GT-Eesti-Display-Medium-Trial",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "GT-Eesti-Display-Medium-Trial",
  },
});
