import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { StackScreens } from "../../../App.screens";
import SearchCameraBar from "../Components/SearchCameraBar";
import { plantListExample } from "../../../plant_id_output";

export const IdentifiedScreen = ({ route }) => {
  const { navigate } = useNavigation();
  const { imageUrl, suggestions, dateTaken } = route.params;
  const [plantList, setPlantList] = useState([]);
  const [foundPlant, setFoundPlant] = useState(null); // when a matching plant is returned from perenial API
  const [scientificName, setScientificName] = useState(null); // set by pressing + button

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
    console.log(scientificName, "<< scientificName in findMatchingPlant");
    for (let i = 0; i < plantList.length; i++) {
      console.log(plantList[i]);
      if (
        plantList[i].scientific_name[0]
          .toLowerCase()
          .includes(scientificName.toLowerCase())
      ) {
        console.log("in condition");
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

  const handleAddPlant = (ScientificName) => {
    setScientificName(ScientificName);
  };

  useEffect(() => {
    if (foundPlant) {
      console.log(foundPlant, "<< foundPlant in handleAddPlant");
      navigate(StackScreens.UserProfileScreen);
    }
  }, [foundPlant, navigate]);

  // Call the FindMatchingPlant - filter the response to only include the plant with the same scientific name
  // create object with imageUrl, date taken, watering and sun info
  // send selected plant info object to firebase database (map in firebase equv to obj)
  // navigate to plant profile - errors for some reason when we change to plant profile
  // };

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
            source={{ uri: imageUrl }}
            style={{ width: 150, height: 150 }}
          />
          <Text>Date Taken: {dateTaken}</Text>
          <Text>Suggested Plants:</Text>
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
                  <Text>
                    Common Name: {suggestion.plant_details.common_names[0]}
                  </Text>
                  <Text>Probability: {suggestion.probability}</Text>
                  <View>
                    <Feather
                      name="plus-square"
                      size={20}
                      color="black"
                      style={{ marginLeft: 1 }}
                      onPress={() => {
                        handleAddPlant(
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
