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
import { plantListExample } from "../../../Test Data/plant_id_output"; // hard coded test data to limit api calls
import { PlantListApi } from "../API/PlantListApi"; // Perenuals api call

const { width, height } = Dimensions.get("window");

export const IdentifiedScreen = ({ route }) => {
  const { navigate } = useNavigation();
  const { savedImageUrl, suggestions, dateTaken } = route.params;
  const [plantList, setPlantList] = useState([]);
  const [foundPlant, setFoundPlant] = useState(null);
  const [scientificName, setScientificName] = useState(null);
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    const fetchPlantData = async () => {
      try {
        // Correct method for fetching data from api - comment out so don't use too many api calls
        const plantData = await PlantListApi();
        setPlantList(plantData);
        // Below for testing purposes, comment out when changing to using API call
        // setPlantList(plantListExample);
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
        setFoundPlant(plantList[i]);
        break;
      }
    }
  };

  useEffect(() => {
    if (scientificName) {
      findMatchingPlant(scientificName);
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

  useEffect(() => {
    if (foundPlant) {
      handleAddPlant(foundPlant, dateTaken, savedImageUrl);
      navigate(StackScreens.UserProfileScreen);
    }
  }, [foundPlant, navigate]);

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../../images/bg4.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        {/* <View style={styles.header}></View> */}
        <SearchCameraBar style={styles.searchBar} />
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
              style={[styles.scrollView, { marginBottom: 20 }]}
              contentContainerStyle={{ paddingHorizontal: 10 }}
            >
              {suggestions.map((suggestion) => (
                <View key={suggestion.id} style={styles.suggestionContainer}>
                  <View style={styles.lightGreenContainer}>
                    <Image
                      source={{ uri: suggestion.similar_images[0].url_small }}
                      style={styles.suggestionImage}
                    />
                    <View style={styles.bottomLeftContainer}>
                      <Text
                        style={[styles.bottomLeft, styles.boldText]}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        {suggestion.plant_details.scientific_name}
                      </Text>
                      <Text
                        style={styles.bottomLeft}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        {suggestion.plant_details.common_names
                          ? suggestion.plant_details.common_names[0]
                              .charAt(0)
                              .toUpperCase() +
                            suggestion.plant_details.common_names[0].slice(1)
                          : suggestion.plant_details.scientific_name}
                      </Text>
                      <View
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "row",
                          alignItems: "center",
                          width: "100%",
                          marginTop: -3,
                          // backgroundColor: "red",
                        }}
                      >
                        <Text
                          style={{ flex: 1 }}
                          numberOfLines={1}
                          ellipsizeMode="tail"
                        >
                          Match:{" "}
                          {`${Math.floor(suggestion.probability * 100)}%`}
                        </Text>
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
    // paddingTop: 20,
  },
  container: {
    alignItems: "center",
  },
  text: {
    fontSize: 23,
    fontFamily: "GT-Eesti-Display-Bold-Trial",
    marginBottom: 25,
    marginTop: 15,
    color: "#1A6A45",
  },
  lightGreenContainer: {
    backgroundColor: "#def2e6",
    borderRadius: 8,
    flexDirection: "column",

    paddingTop: 6,
    paddingHorizontal: 6,
  },
  photoContainer: {
    alignItems: "center",
    paddingBottom: 18,
  },
  photo: {
    width: 170,
    height: 180,
    resizeMode: "cover",
    borderRadius: 8,
  },
  dateText: {
    marginTop: 6,
    color: "#1F8505",
    fontSize: 14,
    fontFamily: "GT-Eesti-Display-Medium-Trial",
  },
  scrollView: {
    marginBottom: 10,
  },
  suggestionContainer: {
    marginRight: 15,
    width: 180,
  },
  suggestionImage: {
    width: "100%",
    height: 150,
    marginBottom: 10,
    borderRadius: 8,
  },
  bottomLeftContainer: {
    // position: "absolute",
    // bottom: 10,
    // left: 10,
    // right: 10,
    // backgroundColor: "green",
    display: "flex",
    flexDirection: "column",
  },
  bottomLeft: {
    // fontSize: 18,
    // lineHeight: 24,
    // marginBottom: 7,
    // flex: 1,
  },
  addButton: {
    // position: "absolute",
    // bottom: 10,
    // right: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a6a45",
    borderRadius: 20,
    width: 24,
    height: 24,
  },
  addButtonText: {
    color: "white",
    fontSize: 20,
  },
  header: {
    width: "90%",
    height: 16,
  },
  searchAgainText: {
    marginTop: 18,
    marginBottom: 18,
    fontSize: 19,
    fontFamily: "GT-Eesti-Display-Medium-Trial",
  },
  searchBar: {
    marginTop: 15,
  },
  boldText: {
    fontWeight: "bold",
    // marginBottom: 4,
  },
});

export default IdentifiedScreen;
