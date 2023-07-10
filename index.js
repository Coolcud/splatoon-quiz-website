const quizContainer = document.getElementById('quiz')
const submitButton = document.getElementById('submit')
const resultsContainer = document.getElementById('results')

const quizQuestions = [
  {
    question: "Which of the following characters is NOT part of Deep Cut?",
    options: {
      a: "Big Man",
      b: "Judd",
      c: "Shiver",
      d: "Frye",
    },
    correctAnswer: "b"
  },
  {
    question: "How many splatfests have there been in North America?",
    options: {
      a: "57",
      b: "51",
      c: "50",
      d: "55",
    },
    correctAnswer: "d"
  },
  {
    question: "How many ability chunks does it cost for 3 secondary ability slots?",
    options: {
      a: "Splatoon 1",
      b: "Splatoon 2",
      c: "Splatoon 3",
    },
    correctAnswer: "a"
  }
];

function buildQuiz() {
  const output = [];

  quizQuestions.forEach((question, questionNumber) => {
    const answers = [];

    for (option in question.answers) {
      // Add HTML radio button
      answers.push(
        `
        <label>
          <input
            type="radio"
            name="question${questionNumber}"
            value="${option}"
          />
          ${option} :
          ${question.answers[option]}
        `
      )
    }
  });
}

function showResults() {

}

// Display quiz
buildQuiz();

// Show quiz results on submit
submitButton.addEventListener('click', showResults);