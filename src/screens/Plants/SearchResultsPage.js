import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import SearchCameraBar from "../Components/SearchCameraBar";
import { data } from "../../../data";

const SearchResultsPage = ({ route }) => {
  const { searchPhrase } = route.params;

  const filteredData = data.filter((plant) =>
    plant.common_name.toLowerCase().includes(searchPhrase.toLowerCase())
  );

  const renderPlantItem = ({ item }) => {
    const imageUri =
      item.default_image?.original_url || "../../../images/hotwater.webp";

    return (
      <View style={styles.plantContainer}>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <Text style={[styles.commonName, { color: "#1a6a45" }]}>
          {item.common_name}
        </Text>
        <TouchableOpacity style={styles.buttonContainer}>
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
    marginTop: 25,
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
