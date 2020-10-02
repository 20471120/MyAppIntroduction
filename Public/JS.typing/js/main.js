"use strict";
{
  const words = shuffle([
    "fuck you bitch",
    "goddamn it",
    "son of a bitch",
    "shut up",
    "kiss my ass",
    "you suck",
    "you idiot",
    "shit",
    "screw you",
    "mother-fucker",
    "you cunt",
    "dick face",
    "you are pussy",
    "silly",
    "it sucks",
    "fugly",
    "what the fuck",
    "holy shit",
    "musclehead",
    "annoying",
    "creepy",
    "suck my dick",
    "get the fuck out",
    "shut the fuck up",
    "fuck off"
  ]);

  let word;
  let loc;
  let score;
  let miss;
  const timeLimit = 60 * 1000;
  let startTime;
  let isPlaying = false;
  let currentNum;
    
  const target = document.getElementById("target");
  const scoreLabel = document.getElementById("score");
  const missLabel = document.getElementById("miss");
  const timerLabel = document.getElementById("timer");
  const caution = document.getElementById("caution");
  const info = document.getElementById("info");
  const scored = document.getElementById("scored");
  const missed = document.getElementById("missed");
  const accurate = document.getElementById("accurate");
  const result = document.getElementById("result");
  const message = document.getElementById("message");
  const perfect = document.getElementById("perf");
  const exp = document.getElementById("exp");
  
  


  function shuffle(arr) {
    for(let i = arr.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i],arr[j]];
    }
    return arr;
  }

  
  function setWord() {
    const word = words[currentNum];
    target.textContent = word;
    if(words.length === currentNum) {
      perfect.classList.remove("hidden");
      exp.classList.remove("hidden");
      perfect.textContent = "Congratulation!" + "スピードは完璧だね。" 
    }
  }

  function updateTarget() {
    const word = words[currentNum];
    let placeholder = "";
    for(let i = 0; i < loc; i++) {
      placeholder += "_";
    }
    target.textContent = placeholder + word.substring(loc);
  }

  function updateTimer() {
    const timeLeft = startTime + timeLimit - Date.now();
    timerLabel.textContent = (timeLeft/ 1000).toFixed(2);
    const timeoutID = setTimeout(() => {
      updateTimer();
    }, 10);
    if(timeLeft < 0 || words.length ===currentNum ) {
      isPlaying = false;
      clearTimeout(timeoutID);
      timerLabel.textContent = "0.00";
      setTimeout(() => {
        showResult();
      },100);
    target.textContent = "Click to replay"
    }
  }

  function showMessage() {
    const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
    if(score >= 220 && accuracy >= 90) {
      message.textContent = "あなたは真のワルだね"
    } else if(score >= 120 && accuracy >= 80) {
      message.textContent = "あなたはまあまあワルだね"
    } else {
      message.textContent = "もっとワルになろう!"
    }
  }
  
  function showResult() {
    const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
    result.classList.remove("hidden");
    scored.textContent = "Your score: " + score;
    missed.textContent = "Your miss count: " + miss;
    accurate.textContent = "Your accuracy: " + accuracy.toFixed(2) + "%";
    showMessage();
  }


  window.addEventListener("click", () => {
    result.classList.add("hidden");
    perfect.classList.add("hidden");
    exp.classList.add("hidden");

    if(isPlaying === true) { 
      return;
    }
    isPlaying = true;

    loc = 0;
    score = 0;
    miss = 0;
    currentNum = 0;
    scoreLabel.textContent = score;
    missLabel.textContent = miss;
    setWord();
    caution.classList.add("hidden");
    startTime = Date.now();
    updateTimer();
  });

  window.addEventListener("keydown", (e) => {
    const word = words[currentNum];
    if(isPlaying !== true) {
      return;
    }

    if(e.key === word[loc]) {
      loc++;
      if(loc === word.length) {
        loc=0; 
        currentNum++;
        setWord();
      };
      updateTarget();
      score++;
      scoreLabel.textContent = score;
    } else {
      miss++;
      missLabel.textContent = miss;
    }
  });
}