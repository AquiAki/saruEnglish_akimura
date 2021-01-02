import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Button,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";

import { FAB } from "react-native-paper";
import { Audio } from "expo-av";
import { Asset } from "expo-asset";

import warmUp from "../../assets/warmUp.png";
import warmEnd from "../../assets/babyWarmEnd.png";
import { url } from "inspector";
import { Item } from "native-base";

// interface Voc {
//   en: string;
//   ja: string;
//   // vocLists : Array
//   courseText:string
// }

export function BabyBodyScreen() {
  const navigation = useNavigation();
  const toBaby = () => {
    navigation.navigate("Baby");
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const bodyList = [
    {
      courseText: "まずはウォームアップだっ！",
      en: " head",
      ja: "頭",
      en2: " forehead",
      ja2: "おでこ",
      en3: " headache",
      ja3: "頭痛",
      en4: " the back of the head",
      ja4: "後頭部",
      comment: " ＊    fore = 前の  ,  ache = 痛み  ",
      pronounce: require("../../assets/sounds/headache.mp3"),
    },
    {
      en: " hair",
      ja: "髪",
      en2: " hair root",
      ja2: "毛根",
      en3: " hair cell",
      ja3: "有毛細胞",
      en4: " hair loss",
      ja4: "抜け毛",
      comment: "＊ root = 根  ,  cell = 細胞  ,  loss = 失うこと、減少",
      pronounce: require("../../assets/sounds/hair.mp3"),
    },
    {
      en: " eye",
      ja: "目",
      en2: " eyebrow",
      ja2: "眉毛",
      en3: " eyelash",
      ja3: "まつげ",
      en4: " eyelid",
      ja4: "まぶた",
      // comment:"＊ brow も眉毛という意味  ,  lash = ",

      pronounce: require("../../assets/sounds/eyebrow.mp3"),
    },
    {
      en: "  temple",
      ja: "こめかみ",
      en2: "Temporal",
      ja2: "こめかみの",
      en3: "Temporal bone",
      ja3: "側頭骨",
      en4: "      My temples are throbbing",
      ja4: "こめかみがズキズキする",
      comment: "＊ throbbing = 拍動性の 、(痛みが)ズキズキする ",
      // pronounce: require("../../assets/sounds/temple.mp3"),
    },
    {
      en: " ear",
      ja: "耳",
      en2: " inner ear",
      ja2: "内耳",
      en3: " middle ear",
      ja3: "中耳",
      en4: " outer ear",
      ja4: "外耳",
      pronounce: require("../../assets/sounds/ear.mp3"),
    },
    {
      en: " face",
      ja: "顔",
      en2: " facial",
      ja2: "顔の",
      en3: " facial nerve",
      ja3: "顔面神経",
      en4: "mask-like face",
      ja4: "仮面様顔貌",
      comment: "＊ nerve = 神経  ,  like = のような",
      // pronounce: require("../../assets/sounds/facial.mp3"),
    },
    {
      en: "nose",
      ja: "鼻",
      en2: "nosebleed",
      ja2: "鼻血",
      en3: "have a runny nose",
      ja3: "鼻水がでる",
      en4: "have a stuffy nose ",
      ja4: "鼻が詰まる",
      comment: "＊ bleed = 出血  ,  runny = 流れやすい  ,  stuffy = 詰まった",
      pronounce: require("../../assets/sounds/nose.mp3"),
    },
    {
      en: "  mouth",
      ja: "口",
      en2: "mouth ulcer",
      ja2: "口内炎",
      en3: "mouthpiece",
      ja3: "マウスピース",
      en4: "the corner of the mouth",
      ja4: "口角",
      comment: "＊ ulcer = 潰瘍",
      pronounce: require("../../assets/sounds/mouth.mp3"),
    },
    {
      en: "neck",
      ja: "首",
      en2: "",
      ja2: "項部硬直",
      en3: "1. stiff neck  ",
      ja3: "",
      en4: "2. nuchal rigidity",
      ja4: "",
      comment: "＊ stiff = 堅い、凝った , nuchal = 項部の , rigidity = 硬直",
      pronounce: require("../../assets/sounds/neck.mp3"),
    },
    {
      en: " / 喉頭隆起",
      ja: "のどぼとけ",
      en2: "1. Adam's apple",
      ja2: "",
      en3: "2. laryngeal prominence",
      ja3: "",
      en4: "",
      ja4: "",
      comment:
        "＊ laryngeal = 喉頭部（の） , prominence = 突起          Adam's apple は「アダムが禁断の果実である林檎を喉に詰まらせた」という逸話からきているという説がある",
      // pronounce: require("../../assets/sounds/adamsApple.mp3"),
    },
    {
      en: "shoulder",
      ja: "肩",
      en2: "shoulder joint",
      ja2: "肩関節",
      en3: "shoulder blade / scapula",
      ja3: "肩甲骨",
      en4: "frozen shoulder",
      ja4: "四十肩、五十肩",
      comment: "＊ joint = 関節  ,  frozen = 寒さで凍った、機能が停止した",
      // pronounce: require("../../assets/sounds/shoulder.mp3"),
    },
    {
      en: "arm",
      ja: "腕",
      en2: "armpit",
      ja2: "腋窩",
      en3: "upper arm",
      ja3: "上腕",
      en4: "forearm",
      ja4: "前腕",
      comment: "＊ pit = くぼみ , upper = 上の , fore = 前の",
      pronounce: require("../../assets/sounds/arm.mp3"),
    },
    {
      en: "elbow",
      ja: "肘",
      en2: "elbow joint",
      ja2: "肘関節",
      en3: "tennis elbow",
      ja3: "テニス肘",
      en4: "bend the elbow",
      ja4: "肘を曲げる",
      comment: "＊  bend = 曲げる",
      pronounce: require("../../assets/sounds/elbow.mp3"),
    },
    {
      en: "hand",
      ja: "手",
      en2: "wrist",
      ja2: "手首",
      en3: "palm",
      ja3: "手の平",
      en4: "back of the hand ",
      ja4: "手の甲",
      pronounce: require("../../assets/sounds/hand.mp3"),
    },
    {
      en: "finger",
      ja: "手の指",
      en2: "thumb",
      ja2: "親指",
      en3: "index finger / first finger",
      ja3: "人差し指",
      en4: "",
      ja4: "",
      comment: "＊  thumbの語源は「強い」に由来する",
      pronounce: require("../../assets/sounds/finger1.mp3"),
    },
    {
      en: "",
      ja: "",
      en2: "middle finger / second finger ",
      ja2: "中指",
      en3: " ring finger  / third finger ",
      ja3: "薬指",
      en4: " little finger / fourth finger / pinky",
      ja4: "小指",
      pronounce: require("../../assets/sounds/finger2.mp3"),
    },
    {
      en: "chest",
      ja: "胸",
      en2: "chest wall",
      ja2: "胸壁",
      en3: "chest cavity",
      ja3: "胸腔",
      en4: "chest circumference",
      ja4: "胸囲",
      comment: "＊  cavity = 空洞  ,  circumference = 周囲、周辺",
      pronounce: require("../../assets/sounds/chest.mp3"),
    },
    {
      en: "",
      ja: "ヘソ",
      en2: "1.  navel",
      ja2: "",
      en3: " belly button",
      ja3: "2.  (話し言葉)",
      en4: " umbilicus",
      ja4: "3.  (医学用語)",
      comment:
        "＊  ネーブルオレンジの果頂部(へたと反対部分)とヘソが似ていたためにnavelと呼ばれるようになった",
      pronounce: require("../../assets/sounds/navel.mp3"),
    },
    {
      en: "",
      ja: "おなか",
      en2: "1.  belly",
      ja2: "",
      en3: "2.  stomach",
      ja3: "",
      en4: "abdomen",
      ja4: " 3.  (解剖)",
      pronounce: require("../../assets/sounds/stomach.mp3"),
    },
    {
      en: "",
      ja: "腰",
      en2: "1.  waist",
      ja2: "",
      en3: "2.  hip",
      ja3: " ",
      en4: "3.  lower back",
      ja4: "",
      comment:
        "1.  肋骨の下にあるくびれ                                                      2.  waist の下の張り出した部分                                             3.「腰」の位置に絞った表現  ",
      pronounce: require("../../assets/sounds/waist.mp3"),
    },
    {
      en: "",
      ja: "お尻",
      en2: "1. buttocks",
      ja2: "",
      en3: "2. bottom",
      ja3: "",
      en4: "3. backside",
      ja4: "",
      // pronounce: require("../../assets/sounds/buttocks.mp3"),
    },
    {
      en: "",
      ja: "鼠径部",
      en2: "1. inguinal region",
      ja2: "",
      en3: "2. groin",
      ja3: "",
      en4: "",
      ja4: "",
      comment: "＊  inguinal = 鼠径部の , region = 部位   ",
      // pronounce: require("../../assets/sounds/39574744206.mp3"),
    },
    {
      en: "  leg",
      ja: "脚(下肢)",
      en2: "  lower leg",
      ja2: "下腿",
      en3:
        "                                            restless legs syndrome：RLS",
      ja3: "むずむず脚症候群",
      en4: "",
      ja4: "",
      comment: "restless = そわそわした、休めない , syndrome = 症候群",
      // pronounce: require("../../assets/sounds/39574744206.mp3"),
    },
    {
      en: "thigh",
      ja: "太もも",
      en2: "",
      ja2: "大腿骨",
      en3: "1. thigh bone",
      ja3: "",
      en4: "2. femur (医学用語)",
      ja4: "",
      // pronounce: require("../../assets/sounds/39574744206.mp3"),
    },
    {
      en: "knee",
      ja: "膝",
      en2: "",
      ja2: "膝蓋骨",
      en3: "1. knee cap",
      ja3: "",
      en4: "2. patella(解剖)",
      ja4: "",
      // pronounce: require("../../assets/sounds/39574744589.mp3"),
    },
    {
      en: "",
      ja: "",
      en2: "shin",
      ja2: "すね",
      en3: "calf",
      ja3: "ふくらはぎ",
      en4: "ankle",
      ja4: "くるぶし",
      // pronounce: require("../../assets/sounds/39574744761.mp3"),
    },
    {
      en: "foot",
      ja: "足",
      en2: "athlete's foot ",
      ja2: "水虫",
      en3: "sole /                                  the bottom of the foot",
      ja3: "足の裏",
      en4: "instep  /                               the top of the foot",
      ja4: "足の甲",
      comment:
        "＊  footの複数形は feet                                                       「アスリートに水虫が多い」という理由からathlete's footと言うようになった ",
      // pronounce: require("../../assets/sounds/39574744800.mp3"),
    },
    {
      en: "",
      ja: "",
      en2: "arch",
      ja2: "土踏まず",
      en3: "heel",
      ja3: "かかと",
      en4: "Achilles tendon ",
      ja4: "アキレス腱",
      comment:
        " ＊  tendon = 腱                                                             Achilles tendon はギリシャ神話の英雄アキレスに由来する                                Achilles’ heel で 「唯一の弱点」という意味がある",
      // pronounce: require("../../assets/sounds/39574744806.mp3"),
    },
    {
      en: "toe",
      ja: "足の指",
      en2: "toes",
      ja2: "つま先",
      en3: "big toe / first toe",
      ja3: "足の親指",
      en4: "second toe ",
      ja4: "足の人差し指",
      // pronounce: require("../../assets/sounds/39574744206.mp3"),
    },
    {
      en: "",
      ja: "",
      en2: "third toe ",
      ja2: "足の中指",
      en3: "fourth toe ",
      ja3: "足の薬指",
      en4: "little toe / fifth toe",
      ja4: "足の小指",
      // pronounce: require("../../assets/sounds/39574744206.mp3"),
    },
    // {
    //   en: "",
    //   ja: "",
    //   en2: "",
    //   ja2: "",
    //   en3: "",
    //   ja3: "",
    //   en4: "",
    //   ja4: "",
    //   // pronounce: require("../../assets/sounds/39574744206.mp3"),
    // },
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

  // const checkFabButton = () => {

  //     if(bodyList[currentIndex].en2 !== ""){

  //       <FAB
  //         style={styles.addButton2}
  //         icon="play-circle"
  //         onPress={() => {
  //           playSound2(currentIndex);
  //         }}
  //       />;
  //     }
  // }

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

  // const playSound2 = async (index: number) => {
  //   try {
  //     // サウンドを読み込む
  //     const newSound2 = new Audio.Sound();
  //     const sound2Asset = await Asset.fromModule(bodyList[index].pronounce2);
  //     await newSound2.loadAsync(sound2Asset);

  //     newSound2.playAsync();

  //     // 準備完了
  //     setIsReady(true);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };
  //  const playSound3 = async (index: number) => {
  //    try {
  //      // サウンドを読み込む
  //      const newSound3 = new Audio.Sound();
  //      const sound1Asset = await Asset.fromModule(bodyList[index].pronounce3);
  //      await newSound3.loadAsync(sound1Asset);

  //      newSound3.playAsync();

  //      // 準備完了
  //      setIsReady(true);
  //    } catch (error) {
  //      alert(error);
  //    }
  //  };

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
                {/* <Image
                  // key={item.index}
                  source={item.item.pic}
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                    marginLeft: 100,
                  }}
                /> */}
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
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  backHome:{
    margin:30,
    borderWidth:2,
    borderRadius:10,
    borderColor:"white",
    backgroundColor:"gray",
  },
  title: {
    textAlign: "center",
    lineHeight: 50,
  },

  item: {
    color: "#000077",
    minWidth: "80%",
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
