(function() {
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

    // For each quiz question, build the HTML
    quizQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (option in currentQuestion.answers) {
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
            ${currentQuestion.answers[option]}
          </label>
          `
        );
      };

      // Add current question and options to output
      output.push(
        `
        <div class="question">${question.question}</div>
        <div class="answers">${answers.join('')}</div>
        `
      );
    });

    // Combine output list into string of HTML and add to the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults() {
    // Retrieve answer containers from quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // Track correct user guesses
    let numCorrectGuesses = 0;

    quizQuestions.forEach((currentQuestion, questionNumber) => {
      // Retrieve user's answer choice
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // Right and wrong answers behavior
      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrectGuesses++; // +1 to correct answers total
        answerContainers[questionNumber].style.color = 'lightgreen';
      } else {
        answerContainers[questionNumber].style.color = 'red';
      };
    });

    // Display correct answers out of total
    resultsContainer.innerHTML = ` You got ${numCorrectGuesses} out of ${quizQuestions.length}!`;
  }

  // Display quiz
  buildQuiz();

  // Show quiz results on submit
  submitButton.addEventListener('click', showResults);
})();