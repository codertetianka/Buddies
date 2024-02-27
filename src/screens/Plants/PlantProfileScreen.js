import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackScreens } from "../../../App.screens";
import { plantListExample } from "../../../plant_id_output";

export const PlantProfileScreen = () => {
  const { navigate } = useNavigation();
  const [plantList, setPlantList] = useState([]);
  const [foundPlant, setFoundPlant] = useState(null);
  const ScientificName = "Aeschynanthus";

  useEffect(() => {
    // Correct method for fetching data from api - commented out so don't use too many api calls. Just using list in plant_id_output for testing purposes
    // const fetchPlantData = async () => {
    //   try {
    //     const plantData = await PlantListApi();
    //     setPlantList(plantData);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchPlantData();
    setPlantList(plantListExample); // for testing purposes, comment out when changing to using API call
  }, []);

  useEffect(() => {
    const findMatchingPlant = (scientificName) => {
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
    findMatchingPlant(ScientificName);
  }, [plantList]);

  console.log(foundPlant, "<< found plant in plant profile screen");
  // if (foundPlant !== null) {
  //   console.log("Found plant:", foundPlant);
  // } else {
  //   console.log("Plant not found with scientific name:", scientificName);
  // }

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../../assets/splash.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.text}>Plant Profile Screen</Text>
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
});
