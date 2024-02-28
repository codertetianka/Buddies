import React, { useContext, useState, useEffect } from "react";
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

const { width, height } = Dimensions.get("window");

export const UserProfileScreen = () => {
  const { navigate } = useNavigation();
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [plants, setPlants] = useState([]);
  // const todaysDate = new Date();
  const [todaysDate, setTodaysDate] = useState("");
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

  const renderUserPlant = ({ item }) => {
    const capitalizedPlantName =
      item.common_name.charAt(0).toUpperCase() + item.common_name.slice(1);

    return (
      <View style={styles.plantContainer}>
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
          <View>
            <Text>
              You've kept your {item.common_name} alive for{" "}
              {
                handleStreakCounter(item.date_added, todaysDate)
                //  && NativeModules.Midnight.triggerDayChangedEvent(item.date_added, todaysDate)
                // handleStreakCounter(item.date_added)
              }{" "}
              days!

            </Text>
          </View>
          <TouchableOpacity onPress={() => handleDelete(item)}>
            <Text style={styles.removeButton}>Remove</Text>
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
          <Text style={styles.text}>{loggedInUser.name} Profile Screen</Text>
          {loggedInUser.plants ? (
            <SafeAreaView style={styles.plantsContainer}>
              <FlatList
                data={plants}
                renderItem={renderUserPlant}
                keyExtractor={(item, index) => item.id + index}
              />
            </SafeAreaView>
          ) : (
            <Text>No plants added yet</Text>
          )}
          <View style={styles.buttonContainer}>
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
  plantsContainer: {
    marginTop: 10,
  },
  plantContainer: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#def2e6",
    borderRadius: 8,
    width: width - 35,
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
    marginLeft: 10,
  },
  plantName: {
    fontSize: 16,
    fontFamily: "GT-Eesti-Display-Medium-Trial",
  },
  removeButton: {
    color: "red",
    fontSize: 14,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
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
