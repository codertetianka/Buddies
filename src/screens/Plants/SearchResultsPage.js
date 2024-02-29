import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacity,
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
import UserContext from "../../../context/UserContext";
import SearchCameraBar from "../Components/SearchCameraBar";
import { data } from "../../../Test Data/data"; // hard coded test data to limit api calls
import { PlantListApi } from "../API/PlantListApi"; // Perenuals api call

const SearchResultsPage = ({ route }) => {
  const { searchPhrase } = route.params;
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [plantList, setPlantList] = useState([]);

  useEffect(() => {
    const fetchPlantData = async () => {
      try {
        // Correct method for fetching data from api - comment out so don't use too many api calls
        const plantData = await PlantListApi();
        setPlantList(plantData);
        // Below for testing purposes, comment out when changing to using API call
        // setPlantList(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPlantData();
  }, []);

  const filteredData = plantList.filter((plant) =>
    plant.common_name.toLowerCase().includes(searchPhrase.toLowerCase())
  );

  const handlePress = async (item) => {
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
            const imageUrl = await fetch(item.default_image.original_url);
            const blob = await imageUrl.blob();

            const imageRef = ref(storage, `images/${user.id}/${item.id}`);
            await uploadBytes(imageRef, blob);

            const downloadUrl = await getDownloadURL(
              ref(storage, `images/${user.id}/${item.id}`)
            );

            const plantData = {};
            for (const key in item) {
              if (!key.includes("image")) {
                plantData[key] = item[key];
              }
            }
            plantData.original_url = downloadUrl;
            plantData.date_added = new Date()
              .toISOString()
              .toString()
              .slice(0, 10);

            const plantRef = doc(db, "users", user.id);
            updateDoc(plantRef, {
              plants: arrayUnion(plantData),
            });

            alert(`${item.common_name} has been added`);

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

  const renderPlantItem = ({ item }) => {
    const imageUri =
      item.default_image?.original_url || "../../../images/hotwater.webp";

    return (
      <View style={styles.plantContainer}>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <Text style={[styles.commonName, { color: "#1a6a45" }]}>
          {item.common_name}
        </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => handlePress(item)}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>
        Sorry, we couldn't find any plants matching your search for "
        {searchPhrase}".
      </Text>
    </View>
  );

  return (
    <ImageBackground
      source={require("../../../images/bg4.jpg")}
      style={styles.background}
    >
      <SearchCameraBar />
      <View style={styles.container}>
        <Text style={styles.title}>
          Search Results for:{" "}
          <Text style={styles.searchPhrase}>{searchPhrase}</Text>
        </Text>

        {filteredData.length > 0 ? (
          <FlatList
            data={filteredData}
            renderItem={renderPlantItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.flatListContent}
          />
        ) : (
          renderEmptyList()
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 10,
  },
  title: {
    fontSize: 29,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 28,
    textAlign: "center",
  },
  flatListContent: {
    alignItems: "center",
  },
  plantContainer: {
    margin: 5,
    alignItems: "center",
    backgroundColor: "#def2e6",
    borderRadius: 8,
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
  commonName: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a6a45",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: -500,
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1a6a45",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SearchResultsPage;
