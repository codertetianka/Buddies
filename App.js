import { StatusBar } from "expo-status-bar";
import { useEffect, useState, useCallback } from "react";
import { Camera, CameraType } from "expo-camera";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./src/screens/Login/LoginScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SignupScreen } from "./src/screens/Signup/SignupScreen";
import { UserProfileScreen } from "./src/screens/User/UserProfileScreen";
import { PlantProfileScreen } from "./src/screens/Plants/PlantProfileScreen";
import { IdentifiedScreen } from "./src/screens/Plants/IdentifiedScreen";
import { UnidentifiedScreen } from "./src/screens/Plants/UnidentifiedScreen";
import { HomeScreen } from "./src/screens/Home/HomeScreen";
import UserContext from "./context/UserContext";
import { CameraComponent } from "./src/screens/Components/CameraComponent";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

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

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded === true) {
      setAppIsReady(true);
    }
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [loggedUser, setLoggedUser] = useState({});

  useEffect(() => {
    requestPermission();
  }, []);

  // console.log("[App]", { fontsLoaded, fontError });

  if (!appIsReady) {
    return null;
  }
  if (!fontsLoaded) {
    return null;
  }

  if (!permission?.granted) {
    return null;
  }

  return (
    <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: "Home Screen", headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "Login", headerShown: false }}
          />
          <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{ title: "Sign Up", headerShown: false }}
          />
          <Stack.Screen
            name="UserProfileScreen"
            component={UserProfileScreen}
            options={{ title: "User Profile", headerShown: false }}
          />
          <Stack.Screen
            name="PlantProfileScreen"
            component={PlantProfileScreen}
            options={{ title: "Plant Profile", headerShown: false }}
          />
          <Stack.Screen
            name="IdentifiedScreen"
            component={IdentifiedScreen}
            options={{ title: "Indetified Screen", headerShown: false }}
          />
          <Stack.Screen
            name="UnidentifiedScreen"
            component={UnidentifiedScreen}
            options={{ title: "Unidentified Screen", headerShown: false }}
          />
          <Stack.Screen
              name="CameraComponent"
              component={CameraComponent}
              options={{ title: "Camera", headerShown: false }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
</UserContext.Provider>

  );
}
