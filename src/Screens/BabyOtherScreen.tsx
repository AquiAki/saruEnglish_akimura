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
  const bodyList = [
    {
      courseText: "ベイビーコース【身体編】",

      en: "eyebrow",
      ja: "眉毛",
      pronounce: require("../../assets/sounds/39574740601.mp3"),
    },
    {
      en: "hair",
      ja: "髪",
      pronounce: require("../../assets/sounds/39574744206.mp3"),
    },
    {
      en: "shoulder",
      ja: "肩",
      pronounce: require("../../assets/sounds/39574744545.mp3"),
    },
    {
      en: "stomach",
      ja: "お腹",
      pronounce: require("../../assets/sounds/39574744549.mp3"),
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

  const symptomsList = [
    {
      courseText: "ベイビーコース【症状編】",

      en: "feel sluggish / feel run-down",
      ja: "体がだるい",
      pronounce: require("../../assets/sounds/39574744948.mp3"),
      pronounce1: require("../../assets/sounds/39574744962.mp3"),
    },
    {
      en: "",
      ja: "",
      pronounce: require("../../assets/sounds/39574740601.mp3"),
    },
    {
      en: "",
      ja: "",
      pronounce: require("../../assets/sounds/39574740601.mp3"),
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
      const sound1Asset = await Asset.fromModule(bodyList[index].pronounce);
      const sound2Asset = await Asset.fromModule(symptomsList[index].pronounce);
      const sound3Asset = await Asset.fromModule(
        symptomsList[index].pronounce1
      );
      await newSound1.loadAsync(sound1Asset);
      await newSound1.loadAsync(sound2Asset);
      await newSound1.loadAsync(sound3Asset);

      newSound1.playAsync();

      // 準備完了
      setIsReady(true);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button
          title="Back"
          onPress={() => {
            toBaby();
          }}
        />
        <Text style={styles.title}>{bodyList[0].courseText}</Text>
        <FlatList
          data={bodyList}
          keyExtractor={(_, index) => index.toString()}
          renderItem={(item) => (
            <View>
              <Text style={styles.item}>
                {item.item.en} : {item.item.ja}
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
