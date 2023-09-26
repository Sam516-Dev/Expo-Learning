import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageViewer from "./Components/ImageViewer"; // Make sure ImageViewer exists
import Button from "./Components/Button"; // Make sure Button exists
const arsenal_pic = require("./assets/arsenal.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>
        {/* Your text here */}
      </Text>
      <View style={styles.imageContainer}>
        <ImageViewer arsenal_pic={arsenal_pic} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo here!"  />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FF6b",
    alignItems: "center",
    justifyContent: "center",
  },

  Text: {
    color: "#00008B",
    fontSize: 24,
    marginTop: 34,
    fontWeight: "300",
  },

  imageContainer: {
    flex: 1,
    paddingTop: 14,
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
