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
      <Text style={styles.title}>トレーニー</Text>
      <Text>【ステージ3、SARUのトレーニーコース】</Text>
      <Text style={styles.mes}>ここは踏ん張りどころだ、継続は力なりです！</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TraineeVoc");
        }}
      >
        <Text style={styles.course}>トレーニーコースの「身体」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TraineeVoc");
        }}
      >
        <Text style={styles.course}>トレーニーコースの「症状」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TraineeVoc");
        }}
      >
        <Text style={styles.course}>トレーニーコースの「検査」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TraineeVoc");
        }}
      >
        <Text style={styles.course}>トレーニーコースの「病名」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TraineeVoc");
        }}
      >
        <Text style={styles.course}>トレーニーコースの「その他」</Text>
      </TouchableOpacity>
      <Text>{"\n"}【5つのコースを覚えたらレベルチェックをうけてください】</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TraineeQuiz");
        }}
      >
        <Text style={styles.course}>
          トレーニーコースのレベルチェックを受ける
        </Text>
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
  title: {
    color: "blue",
    marginBottom: 50,
    fontSize: 30,
  },
  mes: {
    fontFamily: "Arial",
    marginBottom: 50,
  },
  course: {
    padding: 10,
    marginBottom: 15,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    width: 280,
    alignItems: "center",
    textAlign: "center",
  },
});