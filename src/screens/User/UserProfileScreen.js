import React, { useContext, useState, useEffect, useRef } from "react";

// import { useOnDayChange } from 'react-native-midnight'
import { Feather } from "@expo/vector-icons";
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
  Dimensions,
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

const { width, height } = Dimensions.get("window");

export const UserProfileScreen = () => {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const { navigate } = useNavigation();
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [todaysDate, setTodaysDate] = useState(new Date());

  const { notificationIdentifier, setNotificationIdentifier } =
    useContext(NoteIdentContext);
  const [plants, setPlants] = useState([]);

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

  // const [daysPassed, setDaysPassed] = useState

  // useOnDayChange(() => {
  //   // handleStreakCounter(date)
  //   //need to think of how to access the date_added in a different way as item isnt avail here
  //   setTodaysDate(new Date())
  // })
  useEffect(() => {
    setTodaysDate(new Date());
  }, []);

  //useEffect for handleStreak Counter that will update the useState for daysPassed or Streak?
  // useEffect(()=>{

  // }}

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
              setPlants(userdata.plants);
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

            const updatedPlants = userdata.plants.filter(
              (plant) => plant.id !== item.id
            );

            setLoggedInUser((prevUser) => ({
              ...prevUser,
              plants: updatedPlants,
            }));

            setPlants(updatedPlants);

            const photoRef = ref(storage, `images/${user.id}/${item.id}`);
            await deleteObject(photoRef);
          } catch (error) {
            console.log(error);
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleStreakCounter = (date, today) => {
    const convertedDateTaken = new Date(date);
    // const todaysDate = new Date();
    const timePassed = today.getTime() - convertedDateTaken.getTime();
    const daysPassed = Math.floor(timePassed / (1000 * 3600 * 24));
    return daysPassed;
  };

  const handleWateringLabel = (wateringFrequency) => {
    let wateringPeriod = 0;
    if (wateringFrequency === "Frequent") {
      wateringPeriod = 3;
    } else if (wateringFrequency === "Average") {
      wateringPeriod = 7;
    } else if (wateringFrequency === "Minimum") {
      wateringPeriod = 10;
    }
    return wateringPeriod;
  };

  const renderUserPlants = ({ item }) => {
    const capitalizedPlantName =
      item.common_name.charAt(0).toUpperCase() + item.common_name.slice(1);

    return (
      <View style={[styles.plantContainer, { width: width - 35 }]}>
        <View style={styles.imageContainer}>
          {item.original_url ? (
            <Image
              source={{ uri: item.original_url }}
              style={styles.plantImage}
            />
          ) : (
            <Image
              source={require("../../../images/hotwater.webp")}
              style={styles.plantImage}
            />
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.plantName}>{capitalizedPlantName}</Text>
          <Text>☀️Prefers {item.sunlight[0]}</Text>
          <Text>💧Water every {handleWateringLabel(item.watering)} days</Text>
          <TouchableOpacity onPress={() => handlePressNotification(item)}>
            {item.hasNotification ? (
              <Text>cancel notification</Text>
            ) : (
              <Text>create notification</Text>
            )}
          </TouchableOpacity>
          <View style={styles.daysIconContainer}>
            <Text style={styles.daysText}>
              {handleStreakCounter(item.date_added, todaysDate)} days
            </Text>
          </View>
        </View>
        <View style={styles.trashIconContainer}>
          <TouchableOpacity onPress={() => handleDelete(item)}>
            <Feather name="trash-2" size={24} color="#1a6a45" />
          </TouchableOpacity>
        </View>
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
          {loggedInUser.plants ? (
            <SafeAreaView style={styles.plantsContainer}>
              <FlatList
                data={loggedInUser.plants}
                renderItem={renderUserPlants}
                keyExtractor={(item, index) => item.id + index}
              />
            </SafeAreaView>
          ) : (
            <Text>No plants added yet</Text>
          )}
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
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20, // Added paddingHorizontal for better spacing
  },
  plantsContainer: {
    flex: 1,
    width: "100%",
  },
  plantContainer: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#def2e6",
    borderRadius: 8,
  },
  imageContainer: {
    width: width / 2.7,
    height: (height / 6) * 1,
  },
  plantImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 13,
    justifyContent: "center",
  },
  plantName: {
    fontSize: 17,
    fontFamily: "GT-Eesti-Display-Medium-Trial",
    color: "black",
  },
  trashIconContainer: {
    marginTop: 80,
    padding: 17,
  },
  daysIconContainer: {
    marginBottom: 65,
    marginTop: 15,
  },
  daysText: {
    color: "#3bb162",
    fontFamily: "GT-Eesti-Display-Bold-Trial",
    fontSize: 14,
  },
});
