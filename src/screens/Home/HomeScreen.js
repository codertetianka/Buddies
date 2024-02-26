import React, { useState, useEffect } from "react";
import Feather from "react-native-vector-icons/Feather";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchCameraBar from "../Components/SearchCameraBar";
// import { StackScreens } from "../../../App.screens";
import { data } from "./../../../data";

export const HomeScreen = () => {
  const { navigate } = useNavigation();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    loadPlantData();
  }, []);

  const loadPlantData = () => {
    setTimeout(() => {
      setPageNumber(pageNumber + 1);
    }, 1000);
  };

  const renderRowItem = ({ item, height, width, index }) => {
    // console.log("[item]", { index });
    // if (!item.default_image) {
    //   console.log("[item]", { item });
    //   return null;
    // }

    const imageHeight = (width || 0) - 80;
    const imageWidth = (width || 0) - 60;
    return (
      <View
        style={[
          styles.itemContainer,
          {
            width: width || 0,
            height: width || 0,
            ...(index % 2 === 0
              ? { paddingRight: "2%" }
              : { paddingLeft: "2%" }),
          },
        ]}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            flex: 1,
            backgroundColor: "#def2e6",
          }}
        >
          {item.default_image?.original_url ? (
            <Image
              source={{ uri: item.default_image?.original_url }}
              style={[styles.image, { width: imageWidth, height: imageHeight }]}
            />
          ) : (
            <Image
              source={require("../../../images/hotwater.webp")}
              style={[styles.image, { width: imageWidth, height: imageHeight }]}
            />
          )}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 6,
              paddingHorizontal: 6,
            }}
          >
            {/* <Text style={styles.scientificName}>{item.scientific_name}</Text> */}
            <Text
              style={styles.commonName}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.common_name
                .split(" ")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ")}
            </Text>
            <TouchableOpacity
              style={[styles.buttonPlus, {}]} // Wrap inline style object with curly braces
              // onPress={() => navigate(StackScreens.UserProfileScreen)}
            >
              <View
                style={{
                  // flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  height: 26,
                  width: 26,
                  backgroundColor: "#1a6a45",
                }}
              >
                <Text style={[styles.buttonP, {}]}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const [containerLayout, setContainerLayout] = useState();

  const containerHeight = containerLayout?.height;
  const containerWidth = containerLayout?.width;
  // console.log("[containerWidth]", containerLayout);

  const noOfColumns = 2;
  return (
    <>
      <SearchCameraBar />
      <ImageBackground
        resizeMode="cover"
        source={require("../../../images/bg4.jpg")}
        style={styles.background}
      >
        <SafeAreaView
          style={{ flex: 1, width: "100%" }}
          onLayout={(e) => {
            setContainerLayout(e.nativeEvent.layout);
          }}
        >
          <FlatList
            data={data}
            renderItem={(props) =>
              renderRowItem({
                ...props,
                height: containerHeight / noOfColumns,
                width: containerWidth / noOfColumns,
              })
            }
            extraData={{
              containerHeight,
              containerWidth,
            }}
            numColumns={noOfColumns}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.flatListContent}
          />
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    // paddingVertical: 12,
    paddingBottom: 0,
    padding: "4%",
  },
  image: {
    borderRadius: 8,
    marginTop: 15,
  },
  // scientificName: {
  //   marginTop: 10,
  //   fontSize: 16,
  //   fontFamily: "GT-Eesti-Display-Bold-Trial",
  // },
  commonName: {
    // marginTop: 10,
    fontSize: 16,
    fontFamily: "GT-Eesti-Display-Bold-Trial",
    color: "#1a6a45",
    padding: 6,
    flex: 1,

    borderRadius: 18,
  },
  // featuredPlantsText: {
  //   fontSize: 20,
  //   fontFamily: "GT-Eesti-Display-Bold-Trial",
  //   color: "#000",
  // },
  buttonPlus: {
    // padding: 12,

    padding: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonP: {
    color: "white",
    fontWeight: "bold",
    color: "white",
  },
});
