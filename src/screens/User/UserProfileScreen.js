import React, { useContext, useState, useEffect } from "react";
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

export const UserProfileScreen = () => {
  const { navigate } = useNavigation();
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [plants, setPlants] = useState([]);

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
          if (userdata.username) {
            setPlants(userdata.plants);
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

  const handleStreakCounter = (date) => {
    console.log(date, "<<date");
    //convert our string date to useable format with date methods
    //define todays date in same format
    //return difference between todays date minus date added
    //if there is a dateTaken property for item (below) render the output of this function below.

    const convertedDateTaken = new Date(date);
    const todaysDate = new Date();

    const timePassed = todaysDate.getTime() - convertedDateTaken.getTime();

    let daysPassed = Math.floor(timePassed / (1000 * 3600 * 24));

    console.log(
      convertedDateTaken,
      "convertedDateTaken",
      todaysDate,
      "<<<todaysDate",
      daysPassed,
      "<<<daysPassed"
    );
    return daysPassed;
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
        {item.date_added ? (
          <View>
            <Text>
              You've kept your {item.common_name} alive for{" "}
              {handleStreakCounter(item.date_added)} days!
            </Text>
          </View>
        ) : null}
        <TouchableOpacity onPress={() => handleDelete(item)}>
          <Feather
            name="trash-2"
            size={20}
            color="black"
            style={{ marginLeft: 1 }}
          />
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
                data={plants}
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
            {/* <TouchableOpacity

              onPress={() => navigate(StackScreens.IdentifiedScreen)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Go to Identified page</Text>
          </TouchableOpacity>*/}
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
