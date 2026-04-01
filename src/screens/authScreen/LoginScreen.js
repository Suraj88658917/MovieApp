import { View, Text, Button } from "react-native";
import React from "react";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{flex:1 , backgroundColor:"#fff" , justifyContent:"center" , alignItems:"center" }}>
      <Text>Login Screen</Text>

      <Button
        title="Go to Register"
        onPress={() => navigation.navigate("RegisterScreen")}
      />

      <Button
        title="Login"
        onPress={() => navigation.navigate("MainApp")}
      />
    </View>
  );
};

export default LoginScreen;