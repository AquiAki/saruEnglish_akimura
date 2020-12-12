import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { isTemplateExpression } from "typescript";

export function BabyQuizScreen() {
  const navigation = useNavigation();
  // const toBabyQuiz = () => {
  //   navigation.navigate("BabyQuiz");
  // };

  // Quizの部分
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect: boolean) => {
    if (isCorrect === true) {
      // alert("this answer is correct")
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);

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

  const questions = [
    {
      questionText: "mouth",
      answerOptions: [
        { answerText: "目", isCorrect: false },
        { answerText: "顔", isCorrect: false },
        { answerText: "口", isCorrect: true },
        { answerText: "耳", isCorrect: false },
      ],
    },
    {
      questionText: "eyebrow",
      answerOptions: [
        { answerText: "胸", isCorrect: false },
        { answerText: "お腹", isCorrect: false },
        { answerText: "眉毛", isCorrect: true },
        { answerText: "耳", isCorrect: false },
      ],
    },
    {
      questionText: "knee",
      answerOptions: [
        { answerText: "腕", isCorrect: false },
        { answerText: "肩", isCorrect: false },
        { answerText: "膝", isCorrect: true },
        { answerText: "肘", isCorrect: false },
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
  ];


  // ランダム関数だけで、重複してしまう(下の重複しないコードを書いても。原因わからず、時間あったらまたやる)

  // const randomQuiz: number[] = []; // randomQuizはランダムにindexの数字を出し、その数字がかぶることもない
  // const min = 0;
  // const max = questions.length;

  // function intRandom(min: number, max: number) {
  //   return Math.floor(Math.random() * (max - min)) + min;
  // }

  // for (let i = min; i < max; i++) {
  //   while (true) {
  //   let tmp = intRandom(min, max); //questions.length 配列の要素数 5
  //   if (!randomQuiz.includes(tmp)) {
  //     randomQuiz.push(tmp);
  //     break;
  //   }
  //   }
  // }

  // // const randomCurrentNumber = Number(randomQuiz);
  // // setCurrentQuestion(randomQuiz[])

  // const randomQuestions =
  //   questions[Math.floor(Math.random() * questions.length)];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ベイビーコースのクイズ : {currentQuestion + 1}問目
      </Text>
      <Text style={styles.question}>
        {"\n"}

        {questions[currentQuestion].questionText}
        {/* {randomQuestions.questionText} */}
        {/* {randomQuestions[randomQuiz].questionText} */}
        {"\n"}
      </Text>
      <TouchableOpacity
        onPress={() => {
          handleAnswerButtonClick(
            questions[currentQuestion].answerOptions[0].isCorrect
          );
        }}
      >
        <Text style={styles.answer}>
          {questions[currentQuestion].answerOptions[0].answerText}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleAnswerButtonClick(
            questions[currentQuestion].answerOptions[1].isCorrect
          );
        }}
      >
        <Text style={styles.answer}>
          {questions[currentQuestion].answerOptions[1].answerText}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleAnswerButtonClick(
            questions[currentQuestion].answerOptions[2].isCorrect
          );
        }}
      >
        <Text style={styles.answer}>
          {questions[currentQuestion].answerOptions[2].answerText}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleAnswerButtonClick(
            questions[currentQuestion].answerOptions[3].isCorrect
          );
        }}
      >
        <Text style={styles.answer}>
          {questions[currentQuestion].answerOptions[3].answerText}
        </Text>
      </TouchableOpacity>

      <Text style={styles.score}>
        {"\n"}
        {"\n"}
        Score : {score} / {currentQuestion + 1}
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
    backgroundColor: "#FFC0CB",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  question: {
    fontSize: 45,
    color: "black",
  },
  answer: {
    padding: 10,
    margin: 25,
    fontSize: 40,
    borderRadius: 20,
    backgroundColor: "white",
    width: 300,
    textAlign: "center",
  },
  score: {
    fontSize: 25,
  },
  botton: {
    fontSize: 50,
  },
});
