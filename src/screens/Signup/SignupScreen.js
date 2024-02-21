import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Button, Text } from "react-native";

export const SignupScreen = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      {/* You can customize this screen for sign up */}
      <Button
        title="Go to Home"
        onPress={() => {
          navigate("Home");
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
