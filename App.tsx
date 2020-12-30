import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import {
  BabyScreen,
  BabyQuizScreen,
  BabyBodyScreen,
  BabySymptomsScreen,
  BabyTestScreen,
  BabyDiseaseScreen,
  BabyOtherScreen,
  YoungScreen,
  YoungQuizScreen,
  YoungVocScreen,
  TraineeScreen,
  TraineeQuizScreen,
  TraineeVocScreen,
  StarScreen,
  StarQuizScreen,
  StarVocScreen,
  MaestroScreen,
  MaestroQuizScreen,
  MaestroVocScreen,
  LevelScreen,
  SigninScreen,
  SignupScreen,
} from "./src/Screens/Screens";
import "./src/Fire";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="BabyQuiz">
        <Stack.Screen
          name="Baby"
          component={BabyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BabyQuiz"
          component={BabyQuizScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BabyBody"
          component={BabyBodyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BabySymptoms"
          component={BabySymptomsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BabyTest"
          component={BabyTestScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BabyDisease"
          component={BabyDiseaseScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BabyOther"
          component={BabyOtherScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Young"
          component={YoungScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="YoungQuiz"
          component={YoungQuizScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="YoungVoc"
          component={YoungVocScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Trainee"
          component={TraineeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TraineeQuiz"
          component={TraineeQuizScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TraineeVoc"
          component={TraineeVocScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Star"
          component={StarScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StarQuiz"
          component={StarQuizScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StarVoc"
          component={StarVocScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Maestro"
          component={MaestroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MaestroQuiz"
          component={MaestroQuizScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MaestroVoc"
          component={MaestroVocScreen}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
