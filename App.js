import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/Home/HomeScreen";
import { useFonts } from "expo-font";
import { SignupScreen } from "./src/screens/Signup/SignupScreen";
import UserContext from "./context/UserContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "GT-Eesti-Display-Bold-Italic-Trial": require("./assets/GT-Eesti/GT-Eesti-Display-Bold-Italic-Trial.otf"),
    "GT-Eesti-Display-Bold-Trial": require("./assets/GT-Eesti/GT-Eesti-Display-Bold-Trial.otf"),
    "GT-Eesti-Display-Light-Italic-Trial": require("./assets/GT-Eesti/GT-Eesti-Display-Light-Italic-Trial.otf"),
    "GT-Eesti-Display-Light-Trial": require("./assets/GT-Eesti/GT-Eesti-Display-Light-Trial.otf"),
    "GT-Eesti-Display-Medium-Italic-Trial": require("./assets/GT-Eesti/GT-Eesti-Display-Medium-Italic-Trial.otf"),
    "GT-Eesti-Display-Medium-Trial": require("./assets/GT-Eesti/GT-Eesti-Display-Medium-Trial.otf"),
    "GT-Eesti-Display-Regular-Italic-Trial": require("./assets/GT-Eesti/GT-Eesti-Display-Regular-Italic-Trial.otf"),
    "GT-Eesti-Display-Regular-Trial": require("./assets/GT-Eesti/GT-Eesti-Display-Regular-Trial.otf"),
    "GT-Eesti-Display-Thin-Italic-Trial": require("./assets/GT-Eesti/GT-Eesti-Display-Thin-Italic-Trial.otf"),
    "GT-Eesti-Display-Thin-Trial": require("./assets/GT-Eesti/GT-Eesti-Display-Thin-Trial.otf"),
    "GT-Eesti-Display-UltraBold-Italic-Trial": require("./assets/GT-Eesti/GT-Eesti-Display-UltraBold-Italic-Trial.otf"),
    "GT-Eesti-Display-UltraBold-Trial": require("./assets/GT-Eesti/GT-Eesti-Display-UltraBold-Trial.otf"),
    "GT-Eesti-Display-UltraLight-Italic-Trial": require("./assets/GT-Eesti/GT-Eesti-Display-UltraLight-Italic-Trial.otf"),
    "GT-Eesti-Display-UltraLight-Trial": require("./assets/GT-Eesti/GT-Eesti-Display-UltraLight-Trial.otf"),
    "GT-Eesti-Text-Bold-Italic-Trial": require("./assets/GT-Eesti/GT-Eesti-Text-Bold-Italic-Trial.otf"),
    "GT-Eesti-Text-Bold-Trial": require("./assets/GT-Eesti/GT-Eesti-Text-Bold-Trial.otf"),
    "GT-Eesti-Text-Book-Italic-Trial": require("./assets/GT-Eesti/GT-Eesti-Text-Book-Italic-Trial.otf"),
    "GT-Eesti-Text-Book-Trial": require("./assets/GT-Eesti/GT-Eesti-Text-Book-Trial.otf"),
    "GT-Eesti-Text-Light-Italic-Trial": require("./assets/GT-Eesti/GT-Eesti-Text-Light-Italic-Trial.otf"),
    "GT-Eesti-Text-Light-Trial": require("./assets/GT-Eesti/GT-Eesti-Text-Light-Trial.otf"),
    "GT-Eesti-Text-Medium-Italic-Trial": require("./assets/GT-Eesti/GT-Eesti-Text-Medium-Italic-Trial.otf"),
    "GT-Eesti-Text-Medium-Trial": require("./assets/GT-Eesti/GT-Eesti-Text-Medium-Trial.otf"),
    "GT-Eesti-Text-Regular-Italic-Trial": require("./assets/GT-Eesti/GT-Eesti-Text-Regular-Italic-Trial.otf"),
    "GT-Eesti-Text-Regular-Trial": require("./assets/GT-Eesti/GT-Eesti-Text-Regular-Trial.otf"),
    "GT-Eesti-Text-Thin-Italic-Trial": require("./assets/GT-Eesti/GT-Eesti-Text-Thin-Italic-Trial.otf"),
    "GT-Eesti-Text-Thin-Trial": require("./assets/GT-Eesti/GT-Eesti-Text-Thin-Trial.otf"),
    "GT-Eesti-Text-ULight-Italic-Trial": require("./assets/GT-Eesti/GT-Eesti-Text-ULight-Italic-Trial.otf"),
    "GT-Eesti-Text-UltraLight-Trial": require("./assets/GT-Eesti/GT-Eesti-Text-UltraLight-Trial.otf"),
  });

  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [loggedUser, setLoggedUser] = useState({})

  useEffect(() => {
    requestPermission();
  }, []);

  console.log("[App]", { fontsLoaded, fontError });

  if (!fontsLoaded) {
    return null;
  }

  if (!permission.granted) {
    return null;
  }

  return (
    <UserContext.Provider value={{loggedUser, setLoggedUser}}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ title: "Sign Up", headerShown: false }}
        />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
 
  );
}
