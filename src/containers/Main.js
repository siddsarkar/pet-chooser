import React, { Component } from "react";
import { Paper } from "@material-ui/core";

import Question from "../components/Question";
import Result from "../components/Result";

const questionData = [
  {
    question:
      "How much time you can spend interacting to yor pet a daily basis?",
    answers: [
      {
        type: "Cats",
        content: "More than 1 Hour/day",
      },
      {
        type: "Dogs",
        content: "Less than 1 Hour/day",
      },
      {
        type: "Bird Pets",
        content: "About 1 Hour/day",
      },
    ],
  },
  {
    question: "Are you short tempered?",
    answers: [
      {
        type: "Cats",
        content: "No",
      },
      {
        type: "Dogs",
        content: "Yes",
      },
      {
        type: "Bird Pets",
        content: "Sometimes",
      },
    ],
  },
  {
    question: "Do you like feeding animals?",
    answers: [
      {
        type: "Cats",
        content: "Yes, but less often",
      },
      {
        type: "Dogs",
        content: "No, but sometimes",
      },
      {
        type: "Bird Pets",
        content: "Yes",
      },
    ],
  },
  {
    question: "What sort of skin texture do you prefer?",
    answers: [
      {
        type: "Cats",
        content: "Fluffy",
      },
      {
        type: "Dogs",
        content: "Smooth",
      },
      {
        type: "Bird Pets",
        content: "Silky",
      },
    ],
  },
];

export default class Main extends Component {
  state = {
    count: 0,
    questionNumber: 1,
    question: "",
    options: [],
    // userAnswer: "",
    userAnswersCount: {},
    result: "",
  };

  componentDidMount() {
    this.setState({
      question: questionData[0].question,
      options: questionData[0].answers,
    });
  }

  handleSelectedAnswer = (answer) => {
    console.log(this.state);
    this.setAnswer(answer);
    if (this.state.questionNumber < questionData.length) {
      this.getNextQuestion();
    } else {
      this.setResults(this.getResult());
    }
  };

  setAnswer = (ans) => {
    this.setState((prevState) => ({
      userAnswer: ans,
      userAnswersCount: {
        ...prevState.userAnswersCount,
        [ans]: (prevState.userAnswersCount[ans] || 0) + 1,
      },
    }));
  };

  getNextQuestion = () => {
    const counter = this.state.count + 1;
    const newQuestionNumber = this.state.questionNumber + 1;
    this.setState({
      count: counter,
      questionNumber: newQuestionNumber,
      question: questionData[counter].question,
      options: questionData[counter].answers,
      answer: "",
    });
  };
  getResult = () => {
    const userAnswersCount = this.state.userAnswersCount;
    const userAnswersCountKeys = Object.keys(userAnswersCount);
    const userAnswersCountValues = userAnswersCountKeys.map(
      (key) => userAnswersCount[key]
    );
    const maxAnswerCount = Math.max.apply(null, userAnswersCountValues);
    const result = userAnswersCountKeys.filter(
      (key) => userAnswersCount[key] === maxAnswerCount
    );
    // console.log(userAnswersCount);
    return result;
  };

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: "Undetermined" });
    }
  }

  showQuestions() {
    return (
      <Question
        // answer={this.state.userAnswer}
        options={this.state.options}
        // questionNumber={this.state.questionNumber}
        question={this.state.question}
        // totalQuestions={questionData.length}
        onSelect={this.handleSelectedAnswer}
      />
    );
  }

  showResult() {
    return <Result result={this.state.result} />;
  }

  render() {
    return (
      <Paper
        style={{
          borderRadius: 0,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {this.state.result ? this.showResult() : this.showQuestions()}
      </Paper>
    );
  }
}
