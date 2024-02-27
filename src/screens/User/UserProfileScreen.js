import React, { useContext, useState, useEffect } from "react";
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

  const renderUserPlant = ({ item }) => {
    return (
      <View style={styles.plantContainer}>
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
        <Text style={styles.plantName}>{item.common_name}</Text>
        <TouchableOpacity onPress={() => handleDelete(item)}>
          <Text style={styles.removeButton}>Remove</Text>
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
            <SafeAreaView style={styles.plantsContainer}>
              <FlatList
                data={plants}
                renderItem={renderUserPlant}
                keyExtractor={(item) => item.id.toString()}
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
    marginBottom: 20, // Adjust spacing between plants
    alignItems: "left",
  },
  plantImage: {
    height: 100,
    width: 100,
    borderRadius: 8,
    marginBottom: 5,
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
