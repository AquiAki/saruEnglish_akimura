import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect,useRef} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { Asset } from "expo-asset";
// import BackgroundTimer from "react-native-background-timer";
// import Constants from "expo-constants";




export function BabyQuizScreen() {
  const navigation = useNavigation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  // const [progress, setProgress] = useState(5);
  // const [isReady, setIsReady] = useState(false);

  //音を出す
  const sound = {
    correct: require("../../assets/sounds/correctAnswer.mp3"),
    wrong: require("../../assets/sounds/wrongAnswer.mp3"),
  };

  const playSound: any = async (item: number) => {
    try {
      // サウンドを読み込む
      const newSound1 = new Audio.Sound();
      const sound1Asset = await Asset.fromModule(sound.correct);
      await newSound1.loadAsync(sound1Asset);
      newSound1.playAsync();

      // 準備完了
      // setIsReady(true);
    } catch (error) {
      alert(error);
    }
  };
  const playSound2: any = async (item: number) => {
    try {
      // サウンドを読み込む
      const newSound2 = new Audio.Sound();
      const sound2Asset = await Asset.fromModule(sound.wrong);
      await newSound2.loadAsync(sound2Asset);
      newSound2.playAsync();

      // 準備完了
      // setIsReady(true);
    } catch (error) {
      alert(error);
    }
  };

  const handleAnswerButtonClick = (isCorrect: boolean) => {
    if (isCorrect === true) {
      setScore(score + 1);
      playSound();
    } else {
      playSound2();
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      if (score + 1 === questions.length) {
        alert(`満点でしたので、次のステージに昇格です！`);
        setScore(0);
        setCurrentQuestion(0);
        navigation.navigate("Young");
      } else {
        alert(`満点を取れるまで頑張りましょう！！`);
        setScore(0);
        setCurrentQuestion(0);
        navigation.navigate("Baby");
      }
    }
  };

  // 問題をランダム&重複せずに出すためのコード
  // const randomQuiz: number[] = []; // randomQuizはランダムにindexの数字を出し、その数字がかぶることもない
  // const min = 0;
  // const max = questions.length;

  // function intRandom(min: number, max: number) {
  //   return Math.floor(Math.random() * max);
  // }

  // for (let i = min; i < max; i++) {
  //   while (true) {
  //     let tmp = intRandom(min, max); //questions.length 配列の要素数 5
  //     if (!randomQuiz.includes(tmp)) {
  //       randomQuiz.push(tmp);
  //       randomQuiz.splice(tmp);
  //       break;
  //     }
  //   }
  // }

  // ランダム関数だけで、重複してしまう(下の重複しないコードを書いても。原因わからず、時間あったらまたやる)
  // const randomQuestions = questions[Math.floor(Math.random() * questions.length)];

  // 問題の一覧
  const questions = [
    {
      questionText: "「へそ」ではないのはどれ？",
      answerOptions: [
        { answerText: "belly button", isCorrect: false },
        { answerText: "groin", isCorrect: true },
        { answerText: "umbilicus", isCorrect: false },
        { answerText: "navel", isCorrect: false },
      ],
    },
    {
      questionText: "outer ear",
      answerOptions: [
        { answerText: "外耳", isCorrect: true },
        { answerText: "中耳", isCorrect: false },
        { answerText: "内耳", isCorrect: false },
        { answerText: "耳", isCorrect: false },
      ],
    },
    {
      questionText: "eyelash",
      answerOptions: [
        { answerText: "まぶた", isCorrect: false },
        { answerText: "眉毛", isCorrect: false },
        { answerText: "まつげ", isCorrect: true },
        { answerText: "目", isCorrect: false },
      ],
    },
    {
      questionText: "鼻が詰まる",
      answerOptions: [
        { answerText: "have a runny nose", isCorrect: false },
        { answerText: "have a stuffy nose ", isCorrect: true },
        { answerText: "nosebleed", isCorrect: false },
        { answerText: "nose", isCorrect: false },
      ],
    },
    {
      questionText: "elbow",
      answerOptions: [
        { answerText: "背中", isCorrect: false },
        { answerText: "手", isCorrect: false },
        { answerText: "肘", isCorrect: true },
        { answerText: "首", isCorrect: false },
      ],
    },
    {
      questionText: "thigh",
      answerOptions: [
        { answerText: "膝", isCorrect: false },
        { answerText: "ふくらはぎ", isCorrect: false },
        { answerText: "太もも", isCorrect: true },
        { answerText: "かかと", isCorrect: false },
      ],
    },

    // {
    //   questionText: "",
    //   answerOptions: [
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: true },
    //     { answerText: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "",
    //   answerOptions: [
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: true },
    //     { answerText: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "",
    //   answerOptions: [
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: true },
    //     { answerText: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "",
    //   answerOptions: [
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: true },
    //     { answerText: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "",
    //   answerOptions: [
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: true },
    //     { answerText: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "",
    //   answerOptions: [
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: true },
    //     { answerText: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "",
    //   answerOptions: [
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: true },
    //     { answerText: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "",
    //   answerOptions: [
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: true },
    //     { answerText: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "",
    //   answerOptions: [
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: true },
    //     { answerText: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "",
    //   answerOptions: [
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: true },
    //     { answerText: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "",
    //   answerOptions: [
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: true },
    //     { answerText: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "",
    //   answerOptions: [
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: true },
    //     { answerText: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "",
    //   answerOptions: [
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: true },
    //     { answerText: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "",
    //   answerOptions: [
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: true },
    //     { answerText: "", isCorrect: false },
    //   ],
    // },
  ];

  // const nextQuestion = currentQuestion + 1;
  // if (nextQuestion < questions.length) {
  //   setCurrentQuestion(nextQuestion);
  // } else {
  //   if (score + 1 === questions.length) {
  //     alert(`満点でしたので、次のステージに昇格です！`);
  //     setScore(0);
  //     setCurrentQuestion(0);
  //     navigation.navigate("Young");
  //   } else {
  //     alert(`満点を取れるまで頑張りましょう！！`);
  //     setScore(0);
  //     setCurrentQuestion(0);
  //     navigation.navigate("Baby");
  //   }
  // }

  // const [counter, setCounter] = React.useState(1);

  // timer 必要なこと  100%の状態から1秒毎に減らす  1問5秒なら1秒ごとに25%減る そしてゼロになれば次の問題へ行く ここはcurrentQuestion の数字を1足す

  // useEffect(() => {
  //   const setInterval = setTimeout(() => {
  //     console.log("This will run after 1 second!");
  //   }, 1000);
  //   return () => clearTimeout(setInterval);
  // }, []);

  // function countDown() {
  //   let totalTime = 5;
  //   let secondsPass = 0;
  //   if (secondsPass < totalTime) {
  //     secondsPass = secondsPass + 1;
  //     console.log(secondsPass);

  //     // var progress = Number(secondsPass) / Number(totalTime);
  //   }
  //   //  setInterval(countDown, 1);
  // }

  // setInterval(() => setCounter(counter - 0.2), 10);

  // // 1

  //   function useInterval(callback: any, delay: any) {
  //     const savedCallback: any = useRef();
  //     // Remember the latest callback.
  //     useEffect(() => {
  //       savedCallback.current = callback;
  //     }, [callback]);
  //     // Set up the interval.
  //     useEffect(() => {
  //       function tick() {
  //         savedCallback.current();
  //       }
  //       if (delay !== null) {
  //         let id = setInterval(tick, delay);
  //         return () => clearInterval(id);
  //       }
  //     }, [delay]);
  //   }

  // // 2
  // // && currentQuestion > questions.length

  //     useInterval(() => {
  //       if (progress >= 1 ) {
  //         setProgress(progress - 1);
  //       } else if (progress === 0 ) {
  //         setCurrentQuestion(currentQuestion + 1);
  //         setProgress(5);
  //       } else if (progress === 0 && currentQuestion === questions.length) {

  //       }
  //     }, 1000);

  //     // 3
  //        let animation = useRef(new Animated.Value(0));

  //        // 4

  //             useEffect(() => {
  //               return Animated.timing(animation.current, {
  //                 toValue: progress,
  //                 duration: 50,
  //                 useNativeDriver: true,
  //               }).start();
  //             }, [progress]);

  // const width = animation.current.interpolate({
  //   inputRange: [0, 50],
  //   outputRange: ["0%", "100%"],
  //   extrapolate: "clamp",
  // });

  // var [progress, setProgress] = useState(5);
  // useInterval(() => {
  //   if (progress > 0 && currentQuestion > questions.length) {
  //     setProgress(progress - 1);
  //   } else if ((progress = 0 && currentQuestion > questions.length)) {
  //     setCurrentQuestion(currentQuestion + 1);
  //     setProgress(5);
  //   } else if ((progress = 0 && currentQuestion === questions.length)) {
  //   }
  // }, 1000);

  return (
    <View style={styles.container}>
      {/* <Text>残り時間</Text>
      <Text>{`${progress}`}</Text> */}

      {/* <Progress.Bar
        progress={0.6}
        width={150}
        animated={true}
        style={styles.progressBar}
        
      /> */}

      {/* <View style={styles.progressBar}> */}
      {/* <Animated.View style={styles.absoluteFill}/> */}
      {/* <Animated.View
          style={
            ((<>{styles.absoluteFill}</>), { transform: [{ scaleX: width }] })
          }
        /> */}
      {/* <Animated.View
          style={
            ((<>{styles.absoluteFill}</>), { transform: [{ scaleX: width }] })
          }
        /> */}
      {/* </View> */}

      <Text style={styles.title}>
        ベイビーコースのクイズ : {currentQuestion + 1}問目
      </Text>
      <Text style={styles.question}>
        {"\n"}
        {questions[currentQuestion].questionText}
        {/* {randomQuestions.questionText} */}
        {"\n"}
      </Text>

      <TouchableOpacity
        onPress={() => {
          handleAnswerButtonClick(
            questions[currentQuestion].answerOptions[0].isCorrect
          );
          // handleAnswerButtonClick(randomQuestions.answerOptions[0].isCorrect);
        }}
      >
        <Text style={styles.answer}>
          {/* {randomQuestions.answerOptions[0].answerText} */}
          {questions[currentQuestion].answerOptions[0].answerText}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleAnswerButtonClick(
            questions[currentQuestion].answerOptions[1].isCorrect
          );
          // handleAnswerButtonClick(randomQuestions.answerOptions[1].isCorrect);
        }}
      >
        <Text style={styles.answer}>
          {/* {randomQuestions.answerOptions[1].answerText} */}
          {questions[currentQuestion].answerOptions[1].answerText}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleAnswerButtonClick(
            questions[currentQuestion].answerOptions[2].isCorrect
          );
          // handleAnswerButtonClick(randomQuestions.answerOptions[2].isCorrect);
        }}
      >
        <Text style={styles.answer}>
          {/* {randomQuestions.answerOptions[2].answerText} */}
          {questions[currentQuestion].answerOptions[2].answerText}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleAnswerButtonClick(
            questions[currentQuestion].answerOptions[3].isCorrect
          );
          // handleAnswerButtonClick(randomQuestions.answerOptions[3].isCorrect);
        }}
      >
        <Text style={styles.answer}>
          {/* {randomQuestions.answerOptions[3].answerText} */}
          {questions[currentQuestion].answerOptions[3].answerText}
        </Text>
      </TouchableOpacity>

      <Text style={styles.score}>
        {"\n"}
        {"\n"}
        Score : {score}
      </Text>

      <Button
        title="コースへ戻る"
        onPress={() => {
          navigation.navigate("Baby");
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "#FFC0CB",
    padding: 8,

    // flex: 1,
    // backgroundColor: "#FFC0CB",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingTop: Constants.statusBarHeight,
  },
  // inner: {
  //   width: "100%",
  //   height: 30,
  //   borderRadius: 15,
  //   backgroundColor: "green",
  // },
  label: {
    fontSize: 18,
    color: "black",
    position: "absolute",
    zIndex: 1,
    alignSelf: "center",
  },

  // progressBar: {
  //   height: 20,
  //   width: "100%",
  //   backgroundColor: "red",
  //   borderColor: "#000",
  //   borderWidth: 2,
  //   borderRadius: 5,
  //   flexDirection: "row",
  // },

  // absoluteFill: {
  //   position: "absolute",
  //   left: 0,
  //   right: 0,
  //   top: 0,
  //   bottom: 0,
  //   // useNativeDriver: true,
  //   backgroundColor:"yellow",

  // },

  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  question: {
    fontSize: 30,
    color: "black",
  },
  answer: {
    padding: 10,
    margin: 15,
    fontSize: 30,
    borderRadius: 20,
    backgroundColor: "white",
    width: 300,
    textAlign: "center",
  },
  score: {
    fontSize: 25,
    marginBottom: 18,
  },
  botton: {
    fontSize: 50,
  },
});
