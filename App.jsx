import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MasterCard from "./src/assets/image/MasterCard.svg";


const App = () => {
  return (
   <View style={styles.container}>
      <Text style={styles.title}>App</Text>
      <Text style={styles.text}>My Name is suraj</Text>
      <MasterCard width={90} height={90}/> 
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontFamily: "Poppins-Bold",
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
});

