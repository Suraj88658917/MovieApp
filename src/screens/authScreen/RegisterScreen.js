import { View, Text, Button } from "react-native";
import React from "react";

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={{flex:1 , backgroundColor:"#fff" , justifyContent:"center" , alignItems:"center" }}>
      <Text>Register Screen</Text>

      <Button
        title="Back to Login"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default RegisterScreen;