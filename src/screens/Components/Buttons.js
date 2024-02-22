import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function Button({ title, onPress, icon, colour }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Entypo name={icon} size={28} colour={colour ? colour : "#f1f1f1"} />
      <Text style={StyleSheet.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#f1f1f1",
    marginLeft: 10,
  },
});
