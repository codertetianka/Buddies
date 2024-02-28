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
  setDoc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
  arrayUnion,
} from "firebase/firestore";
import SearchCameraBar from "../Components/SearchCameraBar";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../../../context/UserContext";
import { StackScreens } from "../../../App.screens";
import { Feather } from "@expo/vector-icons";
import { db, storage } from "../../../firebaseConfig";
import { plantListExample } from "../../../plant_id_output";

const { width, height } = Dimensions.get("window");

export const IdentifiedScreen = ({ route }) => {
  const { navigate } = useNavigation();
  const { savedImageUrl, suggestions, dateTaken } = route.params;
  const [plantList, setPlantList] = useState([]);
  const [foundPlant, setFoundPlant] = useState(null); // when a matching plant is returned from perenial API
  const [scientificName, setScientificName] = useState(null); // set by pressing + button
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    const fetchPlantData = async () => {
      try {
        // Correct method for fetching data from api - commented out so don't use too many api calls. Just using list in plant_id_output for testing purposes
        // const plantData = await PlantListApi();
        // setPlantList(plantData);
        // for testing purposes, comment out when changing to using API call
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
        const userdata = user.data();
        if (userdata.username) {
          try {
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
            setLoggedInUser((currUser) => {
              return { ...currUser, plants: [...currUser.plants, plantData] };
            });
          } catch (error) {
            console.log(error);
          }
        }
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
        <SearchCameraBar />
        <Text>Not your plant? Try searching again</Text>
        <View style={styles.container}>
          <View style={styles.lightGreenContainer}>
            <View style={styles.photoContainer}>
              <Image source={{ uri: savedImageUrl }} style={styles.photo} />
              <Text style={styles.dateText}>Date Taken: {dateTaken}</Text>
            </View>
          </View>

          <Text style={styles.text}>Top results</Text>
          <ScrollView style={styles.scrollView}>
            {suggestions.map((suggestion) => {
              return (
                <View key={suggestion.id}>
                  <Image
                    source={{ uri: suggestion.similar_images[0].url_small }}
                    style={{ width: 100, height: 100 }}
                  />
                  <Text>
                    Scientific Name: {suggestion.plant_details.scientific_name}
                  </Text>
                  {suggestion.plant_details.common_names ? (
                    <Text>
                      Common Name: {suggestion.plant_details.common_names[0]}
                    </Text>
                  ) : (
                    <Text>
                      Common Name: {suggestion.plant_details.scientific_name}
                    </Text>
                  )}
                  <Text>Probability: {suggestion.probability}</Text>
                  <View>
                    <Feather
                      name="plus-square"
                      size={20}
                      color="black"
                      style={{ marginLeft: 1 }}
                      onPress={() => {
                        handleMatchingPlant(
                          suggestion.plant_details.scientific_name
                        );
                      }}
                    />
                  </View>
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigate(StackScreens.CameraComponent)}
              style={styles.button}
            >
              <Feather name="camera" size={24} color="white" />
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
    width: 200,
    height: 220,
    resizeMode: "cover",
    borderRadius: 8,
  },
  dateText: {
    marginTop: 5,
    color: "#1A6A45",
    fontSize: 16,
    fontFamily: "GT-Eesti-Display-Bold-Trial",
  },
  scrollView: {
    marginHorizontal: 5,
    marginBottom: 10,
  },
  suggestionContainer: {
    marginBottom: 15,
    alignItems: "center",
  },
  suggestionImage: {
    width: width / 2.5,
    height: (height / 5) * 1,
    borderRadius: 8,
    marginBottom: 5,
  },
  addText: {
    color: "#1A6A45",
    textDecorationLine: "underline",
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "#1A6A45",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "GT-Eesti-Display-Bold-Trial",
  },
});
