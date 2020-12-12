import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Button,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import { FAB } from "react-native-paper";
import { Audio } from "expo-av";
import { Asset } from "expo-asset";

// interface Voc {
//   en: string;
//   ja: string;
//   // vocLists : Array
//   courseText:string
// }

export function BabyOtherScreen() {
  const navigation = useNavigation();
  const toBaby = () => {
    navigation.navigate("Baby");
  };

  const [currentIndex, setcurrentIndex] = useState(0);

  const otherList = [
    {
      courseText: "ベイビーコース【その他編】",

      en: "height",
      ja: "身長",
      pronounce: require("../../assets/sounds/39574754540.mp3"),
    },
    {
      en: "weight",
      ja: "体重",
      pronounce: require("../../assets/sounds/39574754543.mp3"),
    },
    {
      en: "pulse",
      ja: "脈拍",
      pronounce: require("../../assets/sounds/39574754549.mp3"),
    },
    {
      en: "sleep",
      ja: "睡眠",
      pronounce: require("../../assets/sounds/39574754564.mp3"),
    },
    {
      en: "knee",
      ja: "膝",
      pronounce: require("../../assets/sounds/39574744589.mp3"),
    },
    {
      en: "ankle",
      ja: "くるぶし",
      pronounce: require("../../assets/sounds/39574744761.mp3"),
    },
    {
      en: "neck",
      ja: "首",
      pronounce: require("../../assets/sounds/39574744800.mp3"),
    },
    {
      en: "arm",
      ja: "腕",
      pronounce: require("../../assets/sounds/39574744806.mp3"),
    },
  ];


  const [isReady, setIsReady] = useState(false);
  const [sound1, setSound1] = useState<Audio.Sound>();

  // const soundUri = `../../assets/sounds/${bodyList[1].pronounce}.mp3`;

  // const newSound1 = new Audio.Sound();
  // const sound1Asset = await Asset.fromModule(
  //   require("../../assets/sounds/39574740601.mp3")
  // );
  // await newSound1.loadAsync(sound1Asset);
  // newSound1.playAsync();

  const playSound = async (index: number) => {
    try {
      // サウンドを読み込む
      const newSound1 = new Audio.Sound();
      const sound1Asset = await Asset.fromModule(otherList[index].pronounce);

      await newSound1.loadAsync(sound1Asset);

      newSound1.playAsync();

      // 準備完了
      setIsReady(true);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Button
            title="Back"
            onPress={() => {
              toBaby();
            }}
          />
          <Text style={styles.title}>{otherList[0].courseText}</Text>
          <FlatList
            data={otherList}
            keyExtractor={(_, index) => index.toString()}
            renderItem={(item) => (
              <View>
                <Text style={styles.item}>
                  {item.item.en}
                  {"\n"}
                  {item.item.ja}
                </Text>
                <FAB
                  style={styles.addButton}
                  icon="play-circle"
                  onPress={() => {
                    playSound(item.index);
                  }}
                />
              </View>
            )}
          />

          <StatusBar style="auto" />
        </View>
      </ScrollView>
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
