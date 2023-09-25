import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ImageViewer from "./Components/ImageViewer";
import Button from "./Components/Button";
const arsenal_pic = require("./assets/arsenal.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <View style={styles.imageContainer}>
        <ImageViewer arsenal_pic={arsenal_pic} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" />
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
