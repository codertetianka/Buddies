import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
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
import { db, storage } from "../../../firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../../../context/UserContext";
import { Feather } from "@expo/vector-icons";
import { StackScreens } from "../../../App.screens";
import SearchCameraBar from "../Components/SearchCameraBar";
import { plantListExample } from "../../../plant_id_output";

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
    //does foundPlant obj look different to item? no
    //query the database user collection where the usernamne matches the loggedInUser (imported userContext)
    //await getDocs to obtain the user info/data
    //condition to check if there is a username in the returned userdata
    //try block to
    /*
    -upload the photo taken to firebase storage
    -download the picture?? what for
    -creating an object for plantData
    -iterating through keys within the foundPlant and copying them to new plantData object, ignoring copying of an existing image
    -creating a new property in new plantData obj called original_url which is eqiuiv to img downloaded from firebase
    - defining a variable to reference the user to attach plant info as an array to plants key in firebase user collection
    - alert the user to say plant added to profile
    - updating user state to amend their plant data to include the new plant data.
    - catch block for errors ? user not found or logged in?
    */
    console.log(newPlant, "<--newPlant");
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
      console.log(foundPlant, "<< foundPlant in handleAddPlant");

      //add foundPlant to firebase by invoking a function to handle add plant
      //then navigate, then call from firebase to render in userProfile (handled in the next page)
      handleAddPlant(foundPlant, dateTaken, savedImageUrl);
      navigate(StackScreens.UserProfileScreen);
    }
  }, [foundPlant, navigate]);

  // create object with imageUrl, date taken, watering and sun info
  // send selected plant info object to firebase database (map in firebase equv to obj)

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../../images/bg3.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <SearchCameraBar />
          <Text style={styles.text}>Top results</Text>
          <Text>Not your plant? Try searching again</Text>

          <Image
            source={{ uri: savedImageUrl }}
            style={{ width: 150, height: 150 }}
          />
          <Text>Date Taken: {dateTaken}</Text>
          <Text>Suggested Plants:</Text>
          <ScrollView style={styles.scrollView}>
            {suggestions.map((suggestion) => {
              console.log(suggestion, "<<<suggestion");
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
                      }} // change to handle adding to profile
                    />
                  </View>
                </View>
              );
            })}
          </ScrollView>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigate(StackScreens.Login)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Back to Login</Text>
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
  scrollView: {
    marginHorizontal: 5,
  },
});
