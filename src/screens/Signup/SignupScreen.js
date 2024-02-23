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
import UserContext from "../../../context/UserContext";
import { useContext } from "react";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import SearchCameraBar from "../Components/SearchCameraBar";
import { StackScreens } from "../../../App.screens";

const backgroundImage = require("../../../assets/plantsign.png");

export const SignupScreen = () => {
  const { navigate } = useNavigation();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const handleSignup = async () => {
    try {
      const q = query(
        collection(db, "users"),
        where("username", "==", username)
      );
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        console.log("Username already exists");
        navigate(StackScreens.Login);
        return;
      }

      console.log("Creating new user:", name, username);
      const docRef = await addDoc(collection(db, "users"), { name, username });
      console.log("Document written with ID:", docRef.id);
      console.log("Navigating to plant list");
      setLoggedInUser(username);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ImageBackground
        resizeMode="stretch"
        source={backgroundImage}
        style={styles.background}
      >
        <View style={styles.container}>
          <Text style={[styles.buddiesText]}>
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

          <TouchableOpacity
            style={[styles.button, styles.loginButton]}
            onPress={handleSignup}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate(StackScreens.Login)}>
            <Text style={styles.signupText}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    position: "relative",
    flex: 1,
    alignItems: "center",
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
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "GT-Eesti-Display-Medium-Trial",
  },
  buddiesText: {
    marginBottom: 92,
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
});
