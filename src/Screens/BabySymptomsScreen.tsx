import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Button,
  ScrollView,
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

export function BabySymptomsScreen() {
  const navigation = useNavigation();
  const toBaby = () => {
    navigation.navigate("Baby");
  };

  const [currentIndex, setcurrentIndex] = useState(0);
  
  const symptomsList = [
    {
      courseText: "ベイビーコース【症状編】",

      en: "feel sluggish",
      ja: "体がだるい",
      pronounce: require("../../assets/sounds/headache.mp3"),
    },
    {
      en: "feel run-down",
      ja: "体がだるい",
      // pronounce: require("../../assets/sounds/39574746096.mp3"),
    },
    {
      en: "have an abdominal pain",
      ja: "おなかが痛い",
      // pronounce: require("../../assets/sounds/39574745520.mp3"),
    },
    {
      en: "have a stomachache",
      ja: "おなかが痛い",
      // pronounce: require("../../assets/sounds/39574745533.mp3"),
    },
    {
      en: "fart",
      ja: "おならが出る",
      // pronounce: require("../../assets/sounds/39574745952.mp3"),
    },
    {
      en: "hurt",
      ja: "痛みがある",
      // pronounce: require("../../assets/sounds/39574745987.mp3"),
    },
    {
      en: "be in pain",
      ja: "痛みがある",
      // pronounce: require("../../assets/sounds/39574745997.mp3"),
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
      const sound1Asset = await Asset.fromModule(symptomsList[index].pronounce);
      
      
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
          <ScrollView>
            <Button
              title="Back"
              onPress={() => {
                toBaby();
              }}
            />
            <Text style={styles.title}>{symptomsList[0].courseText}</Text>
            <FlatList
              data={symptomsList}
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
          </ScrollView>
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
    lineHeight: 100,
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
    right: 10,
    bottom: 5,
  },
});
