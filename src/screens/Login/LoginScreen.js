import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackScreens } from "../../../App.screens";
import { db } from "../../../firebaseConfig";
import { query, where, getDocs, collection } from "firebase/firestore";
import UserContext from "../../../context/UserContext";

const { width, height } = Dimensions.get("window");

export const LoginScreen = () => {
  const { navigate } = useNavigation();
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    if (loggedInUser) {
      navigate(StackScreens.UserProfileScreen);
    }
  }, [loggedInUser]);

  const handleLogin = async () => {
    const q = query(collection(db, "users"), where("username", "==", username));
    try {
      const snapshot = await getDocs(q);
      snapshot.forEach((doc) => {
        const userdata = doc.data();
        if (userdata.username) {
          setIsLoggingIn(true);
          setLoggedInUser(userdata);
        }
      });
      setUsername("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignup = () => {
    navigate(StackScreens.SignupScreen);
  };

  return (
    <KeyboardAvoidingView behavior={"height"} style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          source={require("../../../assets/planttwo.png")}
          style={styles.background}
        >
          <View
            style={{
              // backgroundColor: "red",
              position: "absolute",
              top: "40%",
              height: "60%",
              width: "100%",
            }}
          >
            <Text style={styles.buddiesText}>
              Welcome back to your{" "}
              <Text style={{ color: "hsla(140, 37%, 52%, 1)" }}>Buddies!</Text>
            </Text>

            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Username"
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

              <TouchableOpacity onPress={handleSignup}>
                <Text style={styles.signupText}>
                  <Text style={{ color: "#000" }}>Don't have an account?</Text>{" "}
                  <Text style={{ color: "#1a6a45" }}>Sign Up here</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  background: {
    flex: 1,
    position: "relative",
    width: width,
    height: "100%",
  },
  inputContainer: {
    flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "14%",
  },
  input: {
    paddingHorizontal: 20,
    marginBottom: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#8fcbaf",
    width: width * 0.85,
    height: 50,
    fontFamily: "GT-Eesti-Display-Medium-Trial",
  },
  roundedInput: {
    borderRadius: 25,
    backgroundColor: "#def2e6",
  },
  buddiesText: {
    paddingHorizontal: 20,
    fontSize: 33,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
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
    marginTop: 40,
    fontFamily: "GT-Eesti-Display-Medium-Trial",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "GT-Eesti-Display-Medium-Trial",
  },
});
