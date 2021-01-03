import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  ScrollView,
} from "react-native-gesture-handler";

import { FAB } from "react-native-paper";
import { Audio } from "expo-av";
import { Asset } from "expo-asset";

import warmUp from "../../assets/warmUp.png";
import warmEnd from "../../assets/babyWarmEnd.png";




export function BabyAnatomyScreen() {
  const navigation = useNavigation();
  const toBaby = () => {
    navigation.navigate("Baby");
  };


  const bodyList = [
    {
      courseText: "解剖学を英語で学んでいこう!",
      en: "brain",
      ja: "脳",
      en2: "brain stem",
      ja2: "脳幹",
      en3: "brain tumor",
      ja3: "脳腫瘍",
      en4: "",
      ja4: "",
      comment: " ＊  stem = 幹  ,  tumor = 腫瘍",
      pronounce: require("../../assets/sounds/headache.mp3"),
    },
    {
      en: "thyroid",
      ja: "甲状腺",
      en2: "thyroid cartilage",
      ja2: "甲状軟骨",
      en3: "                       thyroid hormone",
      ja3: "甲状腺ホルモン",
      en4: "                 thyroid-stimulating hormone ( TSH )",
      ja4: "甲状腺刺激ホルモン",
      comment:
        " ＊ cartilage = 軟骨 , hormone = ホルモン ,                   stimulating = 刺激する ",
      pronounce: require("../../assets/sounds/headache.mp3"),
    },
    {
      en: "tongue",
      ja: "舌",
      en2: "tongue cancer",
      ja2: "舌癌",
      en3: "tongue coating",
      ja3: "舌苔",
      en4: "strawberry tongue",
      ja4: "イチゴ舌",
      comment: " ",
      pronounce: require("../../assets/sounds/headache.mp3"),
    },
    {
      en: "throat",
      ja: "のど",
      en2: "sore throat",
      ja2: "のどの痛み",
      en3: "                 strep throat",
      ja3: "A群溶血性レンサ球菌",
      en4: "",
      ja4: "",
      comment: " ＊sore = 痛い , strep =  連鎖球菌(口語表現)",
      pronounce: require("../../assets/sounds/headache.mp3"),
    },
    {
      en: " ",
      ja: "食道 ",
      en2: "gullet",
      ja2: "",
      en3: "food pipe",
      ja3: "",
      en4: "esophagus / oesophagus",
      ja4: "",
      comment: " ＊esophagusはアメリカ英語、oesophagusはイギリス英語",
      pronounce: require("../../assets/sounds/headache.mp3"),
    },
    {
      en: "heart",
      ja: "心臓",
      en2: "heart rate",
      ja2: "心拍数",
      en3: "heart attack",
      ja3: "心臓発作",
      en4: "heart failure",
      ja4: "心不全",
      comment: " ＊rate = 割合 , attack = 発作 , failure = 機能不全",
      pronounce: require("../../assets/sounds/headache.mp3"),
    },
    {
      en: "lung",
      ja: "肺",
      en2: "right lung",
      ja2: "右肺",
      en3: "left lung",
      ja3: "左肺",
      en4: "lung capacity",
      ja4: "肺活量",
      comment: " ＊capacity = 容量",
      pronounce: require("../../assets/sounds/headache.mp3"),
    },
    {
      en: "liver",
      ja: "肝臓",
      en2: "fatty liver",
      ja2: "脂肪肝",
      en3: "liver cirrhosis",
      ja3: "肝硬変",
      en4: "",
      ja4: "",
      comment: " ＊fatty = 脂肪過多の , cirrhosis = 硬変",
      pronounce: require("../../assets/sounds/headache.mp3"),
    },
    {
      en: "stomach",
      ja: "胃",
      en2: "stomachache",
      ja2: "腹痛",
      en3: "stomach acid",
      ja3: "胃酸",
      en4: "stomach spasms",
      ja4: "胃痙攣",
      comment: " ＊ache = 痛み , acid = 酸 ,  spasm = 痙攣",
      pronounce: require("../../assets/sounds/headache.mp3"),
    },
    {
      en: "spleen",
      ja: "脾臓",
      en2: "enlarged spleen",
      ja2: "脾腫",
      en3: "ruptured spleen",
      ja3: "破裂した脾臓",
      en4: "splenic cyst",
      ja4: "脾嚢胞",
      comment:
        " ＊enlarged = 拡大された , rupture = 破裂する ,            splenic = 脾臓の ,  cyst = 嚢胞",
      pronounce: require("../../assets/sounds/headache.mp3"),
    },
    {
      en: "gallbladder",
      ja: "胆のう",
      en2: "bile",
      ja2: "(人間の)胆汁",
      en3: "gallstones",
      ja3: "胆石",
      en4: "hydrops of gallbladder",
      ja4: "胆嚢水腫",
      comment: " ＊gall = (動物の)胆汁 , bladder = 嚢 ,  hydrops = 水腫",
      pronounce: require("../../assets/sounds/headache.mp3"),
    },
    {
      en: "kidney",
      ja: "腎臓",
      en2: "adrenal gland",
      ja2: "副腎",
      en3: "renal artery",
      ja3: "腎動脈",
      en4: "renal vein",
      ja4: "腎静脈",
      comment:
        " ＊adrenal = 副腎の , gland = 腺 ,                                       renal = 腎臓の , artery = 動脈 , vein = 静脈",
      pronounce: require("../../assets/sounds/headache.mp3"),
    },
    {
      en: "pancreas",
      ja: "膵臓",
      en2: "pancreatic juice",
      ja2: "膵液",
      en3: "pancreatic duct",
      ja3: "膵管",
      en4: "pancreatic islet",
      ja4: "膵島",
      comment: " ＊juice = 分泌液 , duct = 管 , islet = 小島",
      pronounce: require("../../assets/sounds/headache.mp3"),
    },
    {
      en: "intestine",
      ja: "腸",
      en2: "small intestine",
      ja2: "小腸",
      en3: "large intestine",
      ja3: "大腸",
      en4: "",
      ja4: "",
      comment: " ",
      pronounce: require("../../assets/sounds/headache.mp3"),
    },
    {
      en: "",
      ja: "膀胱",
      en2: "bladder",
      ja2: "",
      en3: "urinary bladder",
      ja3: "",
      en4: "",
      ja4: "",
      comment: " ＊bladder = 嚢 , urinary = 尿の",
      pronounce: require("../../assets/sounds/headache.mp3"),
    },
  ];

  const [isReady, setIsReady] = useState(false);
  const [sound1, setSound1] = useState<Audio.Sound>();

  const playSound = async (index: number) => {
    try {
      // サウンドを読み込む
      const newSound1 = new Audio.Sound();
      const sound1Asset = await Asset.fromModule(bodyList[index].pronounce);
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
          <View style={styles.backHome}>
            <Button
              color="white"
              title="ホームへ戻る"
              onPress={() => {
                toBaby();
              }}
            />
          </View>
          <Image
            source={warmUp}
            style={{
              marginTop: 30,
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
          />

          <Text style={styles.title}>{bodyList[0].courseText}</Text>
          <FlatList
            data={bodyList}
            keyExtractor={(_, index) => index.toString()}
            renderItem={(item) => (
              <View>
                <Text style={styles.item}>
                  {item.item.ja} {item.item.en}
                </Text>
                <Text style={styles.item2}>
                  {item.item.ja2} {item.item.en2}
                </Text>
                <Text style={styles.item3}>
                  {item.item.ja3} {item.item.en3}
                </Text>
                <Text style={styles.item4}>
                  {/* {"\n"} */}
                  {item.item.ja4} {item.item.en4}
                </Text>

                <Text style={styles.item5}>{item.item.comment}</Text>
                <Text style={styles.item6}></Text>
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

          <Text style={styles.lastMess}>
            お疲れ様です、ウォームアップは終了！
          </Text>
          <Image
            source={warmEnd}
            style={{
              marginTop: 30,
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
          />
          <Text style={styles.space}></Text>
          <View style={styles.backHome}>
            <Button
              color="white"
              title="ホームへ戻る"
              onPress={() => {
                toBaby();
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  backHome: {
    margin: 30,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "white",
    backgroundColor: "gray",
  },
  title: {
    textAlign: "center",
    lineHeight: 50,
  },

  item: {
    color: "#000077",
    minWidth: "100%",
    flexDirection: "column",
    borderWidth: 2,
    borderColor: "gray",
    paddingTop: 10,
    paddingLeft: 25,
    paddingRight: 5,
    paddingBottom: 5,
    fontSize: 30,
  },
  addButton: {
    position: "absolute",
    right: 14,
    bottom: 220,
  },
  item2: {
    margin: 25,
    marginTop: 30,
    fontSize: 25,
  },
  item3: {
    margin: 25,
    fontSize: 25,
  },
  item4: {
    margin: 25,

    fontSize: 25,
  },
  item5: {
    // fontSize: 10
    margin: 13,
  },
  item6: {},
  lastMess: {
    borderWidth: 1,
    borderColor: "pink",
    width: 400,
    textAlign: "center",
  },
  space: {
    marginBottom: 50,
  },
});
