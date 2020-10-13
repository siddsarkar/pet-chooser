import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import Question from "../components/Question";
import Result from "../components/Result";
import Products from "../components/Products";

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

const productsData = [
  {
    type: "Dogs",
    name: "Dog Product 1",
    description: "lorem ipsum dolor amet",
  },
  {
    type: "Dogs",
    name: "Dog Product 2",
    description: "lorem ipsum dolor amet",
  },
  {
    type: "Dogs",
    name: "Dog Product 3",
    description: "lorem ipsum dolor amet",
  },
  {
    type: "Cats",
    name: "Cat Product 1",
    description: "lorem ipsum dolor amet",
  },
  {
    type: "Cats",
    name: "Cat Product 2",
    description: "lorem ipsum dolor amet",
  },
  {
    type: "Cats",
    name: "Cat Product 3",
    description: "lorem ipsum dolor amet",
  },
  {
    type: "Bird Pets",
    name: "Bird Product 1",
    description: "lorem ipsum dolor amet",
  },
  {
    type: "Bird Pets",
    name: "Bird Product 2",
    description: "lorem ipsum dolor amet",
  },
  {
    type: "Bird Pets",
    name: "Bird Product 3",
    description: "lorem ipsum dolor amet",
  },
];

export default class Main extends Component {
  state = {
    count: 0,
    questionNumber: 1,
    question: "",
    options: [],
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
    return result;
  };

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: "None, Sorry!" });
    }
  }

  showQuestions() {
    return (
      <Question
        options={this.state.options}
        question={this.state.question}
        onSelect={this.handleSelectedAnswer}
      />
    );
  }

  showResult() {
    return <Result result={this.state.result} />;
  }

  showProducts() {
    const products = productsData.filter(
      (product) => product.type === this.state.result
    );
    return products.map((product, i) => {
      return <Products key={i} details={product} />;
    });
  }

  render() {
    return (
      <Grid container direction="column" spacing={2}>
        <Grid item>
          {this.state.result ? this.showResult() : this.showQuestions()}
        </Grid>
        <Grid item container direction="row" spacing={1} justify="center">
          {this.showProducts()}
        </Grid>
      </Grid>
    );
  }
}
