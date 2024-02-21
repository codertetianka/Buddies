import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const UserProfileScreen = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>User Profile Screen</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigate("Login")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  text: {
    fontSize: 24,
    fontFamily: "GT-Eesti-Display-Bold-Trial",
    marginBottom: 20, // Add spacing below the text
  },
  buttonContainer: {
    marginTop: 20, // Add spacing above the button
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
