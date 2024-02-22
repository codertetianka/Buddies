import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { db } from "../../../firebaseConfig";
// import { collection, getDocs, query, where } from "firebase/firestore"

export const HomeScreen = () => {
  const { navigate } = useNavigation();

//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [isLoggingIn, setIsLoggingIn] = useState(false);

//   const handleLogin = async () => {
//     const q = query(collection(db, "users"), where("username", "==", username));
//     try {
//       const snapshot = await getDocs(q)
//     snapshot.forEach((doc) => {
//     // console.log(doc.id, '=>', doc.data())
//     const userdata = doc.data()
//     if (userdata.username) {
//       console.log('will navigate to profile')
//     }
//     })
//     setUsername('')
//   }
// catch (err) {
//   console.log(err)
// }
//     setIsLoggingIn(true);
//     // authentication will be here
//     setTimeout(() => {
//       setIsLoggingIn(false);
//       // when login is successful it will go here
//       navigate("SignupScreen"); // navigate to SignupScreen after login
//     }, 2000);
//   };

//   const handleSignup = () => {
//     // signup logic will go here
//     navigate("SignupScreen"); // will navigate to SignupScreen after sign up as well
//   };

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../../assets/splash.png")}
      style={styles.background}
    >

      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.text}>Home (featured plants) Screen</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigate("Login")}
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
