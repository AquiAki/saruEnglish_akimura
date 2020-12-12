import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

// react native paper ライブラリ
import { Provider as PaperProvider } from "react-native-paper";

import { FAB } from "react-native-paper";

import babyPic from "../../assets/ベイビー.jpg";

export function BabyScreen() {
  const navigation = useNavigation();
  const toBabyQuiz = () => {
    navigation.navigate("BabyQuiz");
  };
  const toBabyVoc = () => {
    navigation.navigate("BabyVoc");
  };;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ベイビー</Text>
      <Text>【ようこそ、SARUのベイビーコースへ】</Text>
      <Image
        source={babyPic}
        style={{
          width: 200,
          height: 200,
          resizeMode: "contain",
        }}
      />

      <Text style={styles.mes}>
        医療英単語を一緒に学んでいきましゅ
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("BabyBody");
        }}
      >
        <Text style={styles.course}>ベイビーコースの「身体」</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("BabySymptoms");
        }}
      >
        <Text style={styles.course}>ベイビーコースの「症状」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("BabyTest");
        }}
      >
        <Text style={styles.course}>ベイビーコースの「検査と薬」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("BabyDisease");
        }}
      >
        <Text style={styles.course}>ベイビーコースの「病名」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("BabyOther");
        }}
      >
        <Text style={styles.course}>ベイビーコースの「その他」</Text>
      </TouchableOpacity>
      <Text>{"\n"}【5つのコースを覚えたらレベルチェックをうけてください】</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("BabyQuiz");
        }}
      >
        <Text style={styles.course}>
          レベルチェックを受ける
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
    color: "#FF00FF",
    marginBottom: 50,
    fontSize: 30,
  },
  mes: {
    fontFamily: "Arial",
  },
  course: {
    padding: 10,
    marginBottom: 15,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    width: 280,
    alignItems: "center",
    textAlign:"center",
  },
});
