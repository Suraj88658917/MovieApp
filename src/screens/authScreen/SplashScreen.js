import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("LoginScreen");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MovieApp</Text>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A90E2",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
  },
  text: {
    color: "white",
    marginTop: 10,
  },
});