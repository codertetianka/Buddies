import { StatusBar } from "expo-status-bar";
import { useEffect, useState, useCallback } from "react";
import { Camera, CameraType } from "expo-camera";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
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
import NoteIdentContext from "./context/NoteIdentContext";
import "react-native-gesture-handler";
import { CameraComponent } from "./src/screens/Components/CameraComponent";
import {
  SafeAreaView,
  useSafeAreaInsets,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { StackScreens } from "./App.screens";
import { fonts } from "./fonts";
import { db } from "./firebaseConfig";
import { query, where, getDocs, collection } from "firebase/firestore";
import SearchResultsPage from "./src/screens/Plants/SearchResultsPage";
import LogoImage from "./images/2.png";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

export const DrawerScreens = {
  AppStack: "AppStack",
};

function CustomDrawerContent({ loggedInUser, setLoggedInUser, ...props }) {
  const { navigate } = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.avatarContainer}>
        <Image
          source={require("./assets/avatar.jpg")}
          style={styles.avatarImage}
        />
        <View style={styles.greetingContainer}>
          <Text
            style={[
              styles.greetingText,
              { fontFamily: "GT-Eesti-Display-Medium-Trial" },
            ]}
          >
            Hi {loggedInUser.name}!✨
          </Text>
        </View>
      </View>

      <DrawerItem
        label="View Profile"
        onPress={() => {
          navigate(StackScreens.UserProfileScreen);
        }}
      />
      <DrawerItem
        label="Browse Plants"
        onPress={() => {
          navigate(StackScreens.HomeScreen);
        }}
      />

      <DrawerItem
        label="Log out"
        onPress={() => {
          setLoggedInUser(null);
          navigate(StackScreens.Login);
        }}
      />
    </DrawerContentScrollView>
  );
}

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={StackScreens.HomeScreen}
      component={HomeScreen}
      options={{
        header: () => (
          <View style={{ backgroundColor: "white" }}>
            <Image
              source={LogoImage}
              style={{ width: 200, height: 60 }}
              resizeMode="cover"
              border="none"
            />
          </View>
        ),
        headerShown: true,
      }}
    />
    <Stack.Screen
      name={StackScreens.Login}
      component={LoginScreen}
      options={{
        header: () => (
          <View style={{ backgroundColor: "white", height: 60 }}>
            <Image
              source={LogoImage}
              style={{ width: 180, height: 60 }}
              resizeMode="cover"
              border="none"
            />
          </View>
        ),
        headerShown: true,
      }}
    />
    <Stack.Screen
      name={StackScreens.SignupScreen}
      component={SignupScreen}
      options={{
        header: () => (
          <View style={{ backgroundColor: "white", height: 60 }}>
            <Image
              source={LogoImage}
              style={{ width: 180, height: 60 }}
              resizeMode="cover"
              border="none"
            />
          </View>
        ),
        headerShown: true,
      }}
    />
    <Stack.Screen
      name={StackScreens.UserProfileScreen}
      component={UserProfileScreen}
      options={{
        header: () => (
          <View style={{ backgroundColor: "white" }}>
            <Image
              source={LogoImage}
              style={{ width: 180, height: 60 }}
              resizeMode="cover"
              border="none"
            />
          </View>
        ),
        headerShown: true,
      }}
    />
    <Stack.Screen
      name={StackScreens.PlantProfileScreen}
      component={PlantProfileScreen}
      options={{ title: "Plant Profile", headerShown: true }}
    />
    <Stack.Screen
      name={StackScreens.IdentifiedScreen}
      component={IdentifiedScreen}
      options={{
        header: () => (
          <View style={{ backgroundColor: "white" }}>
            <Image
              source={LogoImage}
              style={{ width: 180, height: 60 }}
              resizeMode="cover"
              border="none"
            />
          </View>
        ),
        headerShown: true,
      }}
    />
    <Stack.Screen
      name={StackScreens.UnidentifiedScreen}
      component={UnidentifiedScreen}
      options={{
        header: () => (
          <View style={{ backgroundColor: "white" }}>
            <Image
              source={LogoImage}
              style={{ width: 180, height: 60 }}
              resizeMode="cover"
              border="none"
            />
          </View>
        ),
        headerShown: true,
      }}
    />
    <Stack.Screen
      name={StackScreens.CameraComponent}
      component={CameraComponent}
      options={{ title: "Camera", headerShown: false }}
    />
    <Stack.Screen
      name={StackScreens.SearchResultsPage}
      component={SearchResultsPage}
      options={{
        headerTitle: () => (
          <View style={{ marginBottom: 0 }}>
            <Image
              source={LogoImage}
              style={{ width: 180, height: 180 }}
              resizeMode="contain"
              marginTop={-65}
              border="none"
            />
          </View>
        ),
        headerShown: true,
      }}
    />
  </Stack.Navigator>
);

const DrawerStack = ({ loggedInUser, setLoggedInUser }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingTop: loggedInUser ? 0 : insets?.top }}>
      <Drawer.Navigator
        initialRouteName={DrawerScreens.AppStack}
        drawerContent={(props) =>
          loggedInUser ? (
            <CustomDrawerContent
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
              {...props}
            />
          ) : null
        }
      >
        <Drawer.Screen
          name=" "
          options={{ headerShown: !!loggedInUser }}
          component={AppStack}
        ></Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default function App() {
  const [fontsLoaded, fontError] = useFonts(fonts);

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded === true) {
      setAppIsReady(true);
    }
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const q = query(
          collection(db, "users"),
          where("username", "==", "Bunny")
        );
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const userDoc = snapshot.docs[0].data();
          setLoggedInUser(userDoc);
        }
      } catch (error) {
        console.error("Error fetching loggedInUser:", error);
      }
    };

    fetchLoggedInUser();
  }, []);

  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [notificationIdentifier, setNotificationIdentifier] = useState({});

  useEffect(() => {
    requestPermission();
  }, []);

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
    <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <SafeAreaProvider>
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
          <NoteIdentContext.Provider
            value={{ notificationIdentifier, setNotificationIdentifier }}
          >
            <NavigationContainer>
              <DrawerStack
                loggedInUser={loggedInUser}
                setLoggedInUser={setLoggedInUser}
              />
            </NavigationContainer>
          </NoteIdentContext.Provider>
        </UserContext.Provider>
      </SafeAreaProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  greetingContainer: {
    alignItems: "center",
    padding: 16,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  logoImage: {
    width: "50%",
    height: 50,
    resizeMode: "contain",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginRight: 10,
  },
  greetingContainer: {
    flex: 1,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "GT-Eesti-Display-Medium-Trial",
  },
});
