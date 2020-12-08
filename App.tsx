import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
//Screens.tsでまとめたものをimport
import {
  BabyScreen,
  YoungScreen,
  TraineeScreen,
  StarScreen,
  MaestroScreen,
  LevelScreen,
  SigninScreen,
  SignupScreen,
} from "./src/Screens/Screens";
import "./src/Fire";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Level">
        <Stack.Screen
          name="Baby"
          component={BabyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Young"
          component={YoungScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Trainee"
          component={TraineeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Star"
          component={StarScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Maestro"
          component={MaestroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Level"
          component={LevelScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SigninScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
