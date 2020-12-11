import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import { FAB } from "react-native-paper";
import { Audio } from "expo-av";
import { Asset } from "expo-asset";


export function YoungVocScreen() {
  const navigation = useNavigation();
  // const toBabyQuiz = () => {
  //   navigation.navigate("BabyVoc");
  // };

  const bodyList = [
    {
      courseText: "ヤングコース【身体編】",

      en: "eyebrow",
      ja: "眉毛",
    },
    {
      en: "hair",
      ja: "髪",
    },
    {
      en: "shoulder",
      ja: "肩",
    },
    {
      en: "stomach",
      ja: "お腹",
    },
    {
      en: "knee",
      ja: "膝",
    },
    {
      en: "ankle",
      ja: "くるぶし",
    },
    {
      en: "neck",
      ja: "首",
    },
    {
      en: "arm",
      ja: "腕",
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button
          title="ホーム画面に戻る"
          onPress={() => {
            navigation.navigate("Young");
          }}
        />
        <Text style={styles.title}>{bodyList[0].courseText}</Text>
        <FlatList
          data={bodyList}
          renderItem={(item) => (
            <View>
              <Text style={styles.item}>
                {item.item.en} : {item.item.ja}
              </Text>
            </View>
          )}
        />

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    textAlign: "center",
    lineHeight: 70,
    color: "white",
  },

  item: {
    color: "white",
    minWidth: "80%",
    flexDirection: "column",
    borderWidth: 3,
    borderColor: "gray",
    padding: 40,
    fontSize: 20,
  },
  addButton: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
});
