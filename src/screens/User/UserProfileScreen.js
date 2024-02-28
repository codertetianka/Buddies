import React, { useContext, useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
  SafeAreaView,
  Platform,
} from "react-native";
import { db, storage } from "../../../firebaseConfig";
import {
  doc,
  setDoc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
  arrayRemove,
} from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { StackScreens } from "../../../App.screens";
import UserContext from "../../../context/UserContext";
import { deleteObject, ref } from "firebase/storage";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import NoteIdentContext from "../../../context/NoteIdentContext";

export const UserProfileScreen = () => {
  const [expoPushToken, setExpoPushToken] = useState("");
  // const [notificationIdentifier, setNotificationIdentifier] = useState({});
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const { navigate } = useNavigation();
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const { notificationIdentifier, setNotificationIdentifier } =
    useContext(NoteIdentContext);
  // const [plants, setPlants] = useState([]);

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      setExpoPushToken(token);
    });

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === "android") {
      try {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        });
      } catch (err) {
        console.log(err);
      }
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId: "e397f990-5892-44b7-8a51-e657bbb56bca",
        })
      ).data;
    } else {
      alert("Must use physical device for Push Notifications");
    }

    return token;
  }

  const handlePressNotification = async (plant) => {
    try {
      if (plant.hasNotification) {
        await handleCancellation(plant);
      } else {
        await sendNotification(plant);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendNotification = async (plant) => {
    const waterFrequency = {
      Minimum: 864000,
      Average: 604800,
      Frequent: 259200,
    };

    try {
      const identifier = await Notifications.scheduleNotificationAsync({
        content: {
          title: "Time to water your plants",
          body: `${plant.common_name} needs watering`,
        },
        trigger: {
          seconds: waterFrequency[plant.watering],
          repeats: true,
        },
      });

      setNotificationIdentifier((currIdent) => ({
        ...currIdent,
        [plant.id]: identifier,
      }));
      try {
        const q = query(
          collection(db, "users"),
          where("username", "==", loggedInUser.username)
        );
        const snapshot = await getDocs(q);
        snapshot.forEach(async (user) => {
          const userdata = user.data();

          if (userdata.username) {
            try {
              const plantRef = doc(db, "users", user.id);

              const updatedPlants = userdata.plants.map((p) => {
                if (p.id === plant.id) {
                  return {
                    ...p,
                    // notificationStatus: { [plant.id]: identifier },
                    hasNotification: true,
                  };
                } else {
                  return p;
                }
              });

              updateDoc(plantRef, {
                plants: updatedPlants,
              });

              setLoggedInUser((currUser) => {
                return {
                  ...currUser,
                  plants: updatedPlants,
                };
              });
            } catch (error) {
              console.log(error);
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
      alert("Notification set");
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancellation = async (plant) => {
    try {
      await Notifications.cancelScheduledNotificationAsync(
        notificationIdentifier[plant.id]
      );
      setNotificationIdentifier((curr) => {
        const copyCurr = { ...curr };
        delete copyCurr[plant.id];
        return copyCurr;
      });
      alert("Notification cancelled");

      try {
        const q = query(
          collection(db, "users"),
          where("username", "==", loggedInUser.username)
        );
        const snapshot = await getDocs(q);
        snapshot.forEach(async (user) => {
          const userdata = user.data();

          if (userdata.username) {
            try {
              const plantRef = doc(db, "users", user.id);

              const updatedPlants = userdata.plants.map((p) => {
                if (p.id === plant.id) {
                  return {
                    ...p,
                    hasNotification: !p.hasNotification,
                  };
                } else {
                  return p;
                }
              });

              updateDoc(plantRef, {
                plants: updatedPlants,
              });

              setLoggedInUser((currUser) => {
                return {
                  ...currUser,
                  plants: updatedPlants,
                };
              });
            } catch (error) {
              console.log(error);
            }
          }
        });
      } catch (error) {
        console.log();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const q = query(
          collection(db, "users"),
          where("username", "==", loggedInUser.username)
        );
        const snapshot = await getDocs(q);
        snapshot.forEach((user) => {
          const userdata = user.data();
          if (userdata.plants) {
            if (userdata.username) {
              // setPlants(userdata.plants);
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlants();
  }, [loggedInUser]);

  const handleDelete = async (item) => {
    try {
      const q = query(
        collection(db, "users"),
        where("username", "==", loggedInUser.username)
      );
      const snapshot = await getDocs(q);
      snapshot.forEach(async (user) => {
        console.log("handleDelete");
        const userdata = user.data();
        if (userdata.username) {
          try {
            const plantRef = doc(db, "users", user.id);
            await updateDoc(plantRef, {
              plants: arrayRemove(item),
            });

            const photoRef = ref(storage, `images/${user.id}/${item.id}`); //delete photo from storage
            await deleteObject(photoRef);

            const plants = userdata.plants;

            setLoggedInUser((prevUser) => ({
              ...prevUser,
              plants: plants,
            }));
          } catch (error) {
            console.log(error);
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
    alert(`${item.common_name} has been deleted`);
  };

  const renderUserPlants = ({ item }) => {
    return (
      <View>
        {item.original_url ? (
          <Image
            source={{ uri: item.original_url }}
            style={{ height: 100, width: 100 }}
          />
        ) : (
          <Image
            source={require("../../../images/hotwater.webp")}
            style={{ height: 100, width: 100 }}
          />
        )}
        <Text>{item.common_name}</Text>

        {item.hasNotification ? null : (
          <TouchableOpacity onPress={() => handleDelete(item)}>
            <Text>remove</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => handlePressNotification(item)}>
          {item.hasNotification ? (
            <Text>cancel notification</Text>
          ) : (
            <Text>create notification</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../../assets/splash.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.text}>{loggedInUser.name} Profile Screen</Text>
          {loggedInUser.plants ? (
            <SafeAreaView>
              <FlatList
                data={loggedInUser.plants}
                renderItem={renderUserPlants}
                keyExtractor={(item) => item.id.toString()}
              />
            </SafeAreaView>
          ) : (
            <Text>No plants added yet</Text>
          )}
          <View style={styles.buttonContainer}>
            {/* <TouchableOpacity
              onPress={() => navigate(StackScreens.Login)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Back to Login</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              onPress={() => navigate(StackScreens.HomeScreen)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Go to Home page</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate(StackScreens.PlantProfileScreen)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Go to plant profile page</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate(StackScreens.IdentifiedScreen)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Go to Identified page</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontFamily: "GT-Eesti-Display-Bold-Trial",
    marginBottom: 20,
    color: "#000",
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "#1a6a45",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "GT-Eesti-Display-Bold-Trial",
  },
});
