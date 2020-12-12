import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View ,Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

import babyPic1 from "../../assets/ヤング.png";

export function YoungScreen() {
  const navigation = useNavigation();
  const toYoungQuiz = () => {
    navigation.navigate("YoungQuiz");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ヤング</Text>
      <Text>【ここはステージ2、SARUのヤングコースです】</Text>
      <Image
        source={babyPic1}
        style={{
          width: 200,
          height: 200,
          resizeMode: "contain",
        }}
      />
      <Text style={styles.mes}>僕らヤングは成長が止まらないね！</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("YoungVoc");
        }}
      >
        <Text style={styles.course}>ヤングコースの「身体」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("YoungVoc");
        }}
      >
        <Text style={styles.course}>ヤングコースの「症状」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("YoungVoc");
        }}
      >
        <Text style={styles.course}>ヤングコースの「検査」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("YoungVoc");
        }}
      >
        <Text style={styles.course}>ヤングコースの「病名」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("YoungVoc");
        }}
      >
        <Text style={styles.course}>ヤングコースの「その他」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("YoungQuiz");
        }}
      >
        <Text style={styles.course}>ヤングコースのレベルチェックを受ける</Text>
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
    marginBottom:50,
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
