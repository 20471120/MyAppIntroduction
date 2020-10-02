"use strict";

{
  const question = document.getElementById("question");
  const choices = document.getElementById("choices");
  const btn = document.getElementById("btn");
  const result = document.getElementById("result");
  const scoreLabel = document.querySelector("#result > p");
  const detail = document.getElementById("exp");
  const quizSet = shuffle([
    {q: "Can I pay my tuition in [ ? ]", c: ["installments", "installations", "install", "installing"]},
    {q: "She is [ ? ] to pollen.", c: ["allergic", "allergy", "anemic", "acute"]},
    {q: "Could you tell me where [ ? ] ", c: ["the post office is", "is the post office", "is it the post office", "it is the post office"]},
    {q: "there is a 60% [ ? ] of rain tomorrow.", c: ["probability", "fall", "possible", "likely"]},
    {q: "Would you please keep this information strictly [ ? ] ", c: ["confidential", "hiding", "inside cover", "under water"]}
  ]);

  let currentNum = 0;
  let isAnswered;
  let score = 0;

  function shuffle(arr) {
    for(let i = arr.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i],arr[j]];
    }
    return arr;
  }

  function checkAnswer(li) {
    if (isAnswered) {           
      return;
    }
    isAnswered = true;
    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add("correct");
      score++;
    } else {
      li.classList.add("wrong")
    }

    btn.classList.remove("disabled");
  }

  function setQuiz() {
    isAnswered = false;
    question.textContent = quizSet[currentNum].q;

    while(choices.firstChild) {
      choices.removeChild(choices.firstChild);
    } 

    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach(choice => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });


    if (currentNum === quizSet.length - 1) {
      btn.textContent = "Show Score";
    }
  }

  setQuiz();

  btn.addEventListener("click", () => {
    if (btn.classList.contains("disabled")) {
      return;
    }
    btn.classList.add("disabled");
    if(currentNum === quizSet.length - 1) {
      // console.log(`Score: ${score} / ${quizSet.length}`);
      scoreLabel.textContent = (`Score: ${score} / ${quizSet.length}`);
      result.classList.remove("hidden");
    } else {
      currentNum++;
      setQuiz();
    }
  });

  // exp.addEventListener("click", () => {
  //   if(exp.classList.contains("disabled")) {
  //     return;
  //   } else {

  //   }
  //   exp.classList.add("disabled");
  
}

