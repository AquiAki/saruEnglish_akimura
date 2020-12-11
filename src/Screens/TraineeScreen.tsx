import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";


export function TraineeScreen() {
  const navigation = useNavigation();
  const toTraineeQuiz = () => {
    navigation.navigate("TraineeQuiz");
  };
  return (
    <View style={styles.container}>
      <Text>トレーニー</Text>
      <Text>ステージ3、SARUのトレーニーコース</Text>
      <Text>ここは踏ん張りどころだ、継続は力なりです！</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TraineeVoc");
        }}
      >
        <Text>ヤングコースの「身体」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TraineeVoc");
        }}
      >
        <Text>ヤングコースの「症状」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TraineeVoc");
        }}
      >
        <Text>ヤングコースの「検査」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TraineeVoc");
        }}
      >
        <Text>ヤングコースの「病名」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TraineeVoc");
        }}
      >
        <Text>ヤングコースの「その他」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TraineeQuiz");
        }}
      >
        <Text>ヤングコースのレベルチェックを受ける</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
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
