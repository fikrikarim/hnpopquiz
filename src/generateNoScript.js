const replace = require("replace-in-file");
const quizList = require("./quizList.json");

const questions = quizList
  .map(({ question, choices }, index) => {
    return `
    <p>${index + 1}. ${question}</p>

    <ol type="a">
      ${choices.map(choice => `<li>${choice}</li>`).join("")}
    </ol>
  `;
  })
  .join("");

const separator = `
  <hr>
  <p style="margin: 100px 0">Warning, answers ahead. Continue with your own discretion.</p>
  <hr>
  <br>
`;

const explanations = quizList
  .map(({ question, choices, correctChoice, explanation }, index) => {
    return `
    <p>${index + 1}. ${question}</p>

    <p>Correct answer: ${correctChoice}</p>
    <p>Explanation: ${explanation}</p>

    <br>
  `;
  })
  .join("");

const options = {
  files: "public/index.html",
  from: /<\bnoscript>(.*?)<\/\bnoscript>/s,
  to: `<noscript>${questions + separator + explanations}</noscript>`
};

replace(options)
  .then(results => {
    console.log("index.html is updated with lastest quiz");
  })
  .catch(error => {
    console.error("Error updating index.html with the quiz");
    console.error(error);
  });
