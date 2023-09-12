
import { useEffect } from "react";
import {View, Text, StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';

import Home from './src/pages/Home';
import Start from './src/pages/Start';
import UserDetails from "./src/pages/UserDetails";

const Stack = createNativeStackNavigator();

const loadFonts = async () => {
  await Font.loadAsync({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });
};

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="UserDetails" component={UserDetails} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingTop: "8%",
  },
});