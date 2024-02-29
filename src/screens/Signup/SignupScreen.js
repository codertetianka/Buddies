import React, { useEffect, useState } from "react";
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
import { StackScreens } from "../../../App.screens";

const backgroundImage = require("../../../assets/plantsign.png");

export const SignupScreen = () => {
  const { navigate } = useNavigation();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    if (loggedInUser) {
      navigate(StackScreens.UserProfileScreen);
    }
  }, [loggedInUser]);

  const handleSignup = async () => {
    try {
      const trimmedName = name.trim();
      const trimmedUsername = username.trim();

      console.log(trimmedName);
      console.log(trimmedUsername);

      const q = query(
        collection(db, "users"),
        where("username", "==", trimmedUsername)
      );
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        alert("Username already exists");
        navigate(StackScreens.Login);
        return;
      }

      const docRef = await addDoc(collection(db, "users"), {
        name: trimmedName,
        username: trimmedUsername,
      });
      setLoggedInUser({
        id: docRef.id,
        name: trimmedName,
        username: trimmedUsername,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="stretch"
          source={backgroundImage}
          style={styles.background}
        >
          <View style={styles.inputContainer}>
            <Text style={[styles.buddiesText]}>
              Sign Up to{" "}
              <Text
                style={{
                  color: "#1f8505",
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
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "30%",
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
    marginBottom: 40,
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
