import React, { useContext, useEffect, useState } from "react";
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
import { db } from "../../../firebaseConfig";
import { query, where, getDocs, collection } from "firebase/firestore";
import UserContext from "../../../context/UserContext";

export const LoginScreen = () => {
  const { navigate } = useNavigation();
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
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
      console.log(snapshot);
      snapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
        const userdata = doc.data();
        if (userdata.username) {
          setIsLoggingIn(true);
          setLoggedInUser(userdata);

          //Not sure we need this setTimeOut?
          // setTimeout(() => {
          //   setIsLoggingIn(false);
          //   setLoggedInUser(userdata, () => {
          //     console.log(userdata);
          //     console.log(loggedInUser, "<--loggedInUser");
          //     navigate(StackScreens.UserProfileScreen);
          //   });
          // }, 2000);
        }
      });
      setUsername("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignup = () => {
    // signup logic will go here
    // console.log("Signing up:", { name, username });
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
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={[styles.input, styles.roundedInput]}
            maxLength={50}
          />
          {/* <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={[styles.input, styles.roundedInput]}
            maxLength={50}
            secureTextEntry={true}
          /> */}
          <TouchableOpacity
            style={[styles.button, styles.loginButton]}
            onPress={handleLogin}
            disabled={isLoggingIn}
          >
            <Text style={styles.buttonText}>
              {isLoggingIn ? "Logging in..." : "Log In"}
            </Text>
          </TouchableOpacity>

          {/* <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.signupText}>
              <Text style={{ color: "#000" }}>Don't have an account?</Text>{" "}
              <Text style={{ color: "#1a6a45" }}>Sign Up here</Text>
            </Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "red", marginTop: 40 }]}
            onPress={() => navigate(StackScreens.UserProfileScreen)}
          >
            <Text style={styles.buttonText}>
              Go to User Page(all screens are there)
            </Text>
          </TouchableOpacity>
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
