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

export function BabyDiseaseScreen() {
  const navigation = useNavigation();
  const toBaby = () => {
    navigation.navigate("Baby");
  };

  const [currentIndex, setcurrentIndex] = useState(0);

  const diseaseList = [
    {
      courseText: "ベイビーコース【病名編】",

      en: "cold",
      ja: "風邪",
      pronounce: require("../../assets/sounds/39574754253.mp3"),
    },
    {
      en: "asthma",
      ja: "喘息",
      pronounce: require("../../assets/sounds/39574754270.mp3"),
    },
    {
      en: "pneumothorax",
      ja: "気胸",
      pronounce: require("../../assets/sounds/39574754283.mp3"),
    },
    {
      en: "frozen shoulder)",
      ja: "四十肩、五十肩",
      pronounce: require("../../assets/sounds/39574754307.mp3"),
    },
    {
      en: "diabetes",
      ja: "糖尿病",
      pronounce: require("../../assets/sounds/39574754318.mp3"),
    },
    {
      en: "anemia",
      ja: "貧血",
      pronounce: require("../../assets/sounds/39574754328.mp3"),
    },
    {
      en: "obesity",
      ja: "肥満",
      pronounce: require("../../assets/sounds/39574754332.mp3"),
    },
  ];


  //  const playSound = async () => {
  //    try {
  //      const sound = new Audio.Sound();
  //      const soundAsset = Asset.fromModule(require("./assets/39574740601.mp3"));
  //      await sound.loadAsync(soundAsset);

  //    } catch (error) {
  //      alert(error);
  //    }
  //  };

  const [isReady, setIsReady] = useState(false);
  const [sound1, setSound1] = useState<Audio.Sound>();


  const playSound = async (index: number) => {
    try {
      // サウンドを読み込む
      const newSound1 = new Audio.Sound();
      const sound1Asset = await Asset.fromModule(diseaseList[index].pronounce);
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
          <Text style={styles.title}>{diseaseList[0].courseText}</Text>
          <FlatList
            data={diseaseList}
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
