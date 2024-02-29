import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import {
  doc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
  arrayUnion,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../../firebaseConfig";
import SearchCameraBar from "../Components/SearchCameraBar";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../../../context/UserContext";
import { StackScreens } from "../../../App.screens";
import { Feather } from "@expo/vector-icons";
import { plantListExample } from "../../../plant_id_output";

const { width, height } = Dimensions.get("window");

export const IdentifiedScreen = ({ route }) => {
  const { navigate } = useNavigation();
  const { savedImageUrl, suggestions, dateTaken } = route.params;
  const [plantList, setPlantList] = useState([]);
  const [scientificName, setScientificName] = useState(null);
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    const fetchPlantData = async () => {
      try {
        setPlantList(plantListExample);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPlantData();
  }, []);

  const findMatchingPlant = async (scientificName) => {
    for (let i = 0; i < plantList.length; i++) {
      if (
        plantList[i].scientific_name[0]
          .toLowerCase()
          .includes(scientificName.toLowerCase())
      ) {
        return plantList[i];
      }
    }
    return null;
  };

  useEffect(() => {
    if (scientificName) {
      const foundPlant = findMatchingPlant(scientificName);
      if (foundPlant) {
        handleAddPlant(foundPlant, dateTaken, savedImageUrl);
      }
    }
  }, [scientificName]);

  const handleMatchingPlant = (ScientificName) => {
    setScientificName(ScientificName);
  };

  const handleAddPlant = async (newPlant, photoDate, newPhoto) => {
    try {
      const q = query(
        collection(db, "users"),
        where("username", "==", loggedInUser.username)
      );
      const snapshot = await getDocs(q);
      snapshot.forEach(async (user) => {
        const imageUrl = await fetch(newPhoto);
        const blob = await imageUrl.blob();
        const imageRef = ref(storage, `images/${user.id}/${newPlant.id}`);
        await uploadBytes(imageRef, blob);
        const downloadUrl = await getDownloadURL(
          ref(storage, `images/${user.id}/${newPlant.id}`)
        );

        const plantData = {};
        for (const key in newPlant) {
          if (!key.includes("image")) {
            plantData[key] = newPlant[key];
          }
        }
        plantData.original_url = downloadUrl;
        plantData.date_added = photoDate;

        const plantRef = doc(db, "users", user.id);
        updateDoc(plantRef, {
          plants: arrayUnion(plantData),
        });

        alert(`${newPlant.common_name} has been added`);

        setLoggedInUser((currUser) => ({
          ...currUser,
          plants: [...currUser.plants, plantData],
        }));
        navigate(StackScreens.UserProfileScreen);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../../images/bg4.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <SearchCameraBar />
        <Text style={styles.searchAgainText}>
          Not your plant? Try searching again
        </Text>

        <View style={styles.container}>
          <View style={styles.lightGreenContainer}>
            <View style={styles.photoContainer}>
              <Image source={{ uri: savedImageUrl }} style={styles.photo} />
              <Text style={styles.dateText}>Date Taken: {dateTaken}</Text>
            </View>
          </View>

          <Text style={styles.text}>Top results</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather
              name="chevron-left"
              size={24}
              color="black"
              style={{ marginRight: 10 }}
            />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={[styles.scrollView, { marginVertical: 10 }]}
              contentContainerStyle={{ paddingHorizontal: 10 }}
            >
              {suggestions.map((suggestion) => (
                <View key={suggestion.id} style={styles.suggestionContainer}>
                  <View style={styles.lightGreenContainer}>
                    <Image
                      source={{ uri: suggestion.similar_images[0].url_small }}
                      style={styles.suggestionImage}
                    />
                    <Text>{suggestion.plant_details.scientific_name}</Text>
                    <Text>
                      {suggestion.plant_details.common_names
                        ? suggestion.plant_details.common_names[0]
                        : suggestion.plant_details.scientific_name}
                    </Text>
                    <Text>Probability: {suggestion.probability}</Text>
                    <TouchableOpacity
                      onPress={() =>
                        handleMatchingPlant(
                          suggestion.plant_details.scientific_name
                        )
                      }
                      style={styles.addButton}
                    >
                      <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>
            <Feather
              name="chevron-right"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />
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
    marginBottom: 30,
    color: "#1A6A45",
  },
  lightGreenContainer: {
    backgroundColor: "#def2e6",
    borderRadius: 8,
    padding: 15,
    marginBottom: 5,
  },
  photoContainer: {
    alignItems: "center",
  },
  photo: {
    width: 180,
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
  },
  dateText: {
    marginTop: 5,
    color: "#1F8505",
    fontSize: 16,
    fontFamily: "GT-Eesti-Display-Bold-Trial",
  },
  scrollView: {
    marginBottom: 10,
  },
  suggestionContainer: {
    flex: 1,
    marginBottom: 15,
    alignItems: "center",
    marginLeft: 30,
  },
  searchAgainText: {
    color: "#1A6A45",
    marginTop: 30,
    fontSize: 22,
    marginBottom: 20,
    fontFamily: "GT-Eesti-Display-Bold-Trial",
  },
  suggestionImage: {
    height: 145,
    width: 140,
    borderRadius: 8,
    marginBottom: 5,
  },
  addButton: {
    backgroundColor: "#1A6A45",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default IdentifiedScreen;
