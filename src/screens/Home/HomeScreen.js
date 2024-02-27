import React, { useState, useEffect, useContext } from "react";
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
import { db, storage } from "../../../firebaseConfig";
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
// import { StackScreens } from "../../../App.screens";
import { data } from "./../../../data";
import UserContext from "../../../context/UserContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const HomeScreen = () => {
  const { navigate } = useNavigation();
  const [pageNumber, setPageNumber] = useState(1);
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    loadPlantData();
  }, []);

  const loadPlantData = () => {
    setTimeout(() => {
      setPageNumber(pageNumber + 1);
    }, 1000);
  };

  const handlePress = async (item) => {
    //date added property needs to be added in correct format for streak feature line 78
    console.log(item, "<--items");
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
            console.log(plantData.date_added, "<<<date_added");

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

  const renderRowItem = ({ item, height, width, index }) => {
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
              onPress={() => handlePress(item)}
            >
              <View
                style={{
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
    paddingBottom: 0,
    padding: "4%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
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
    fontSize: 16,
    fontFamily: "GT-Eesti-Display-Medium-Trial",
    color: "black",
    padding: 6,
    flex: 1,

    borderRadius: 18,
  },

  buttonPlus: {
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
