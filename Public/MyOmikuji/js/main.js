"use strict"

{
  const btn = document.getElementById("btn");
  const button = document.getElementById("button");
  // btn.addEventListener("click", () => {
  //   const results = ["大吉", "吉", "小吉", "凶", "大凶"]
  //   const n = Math.floor(Math.random() * 5); // 5の部分は、results.lengthの方がいいかも
  //   btn.textContent = results[n];

  btn.addEventListener("click", () => {
    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = "大吉";
      button.textContent = "おめでとう！　5％を引いたよ！";
    } else if (n < 0.2) {
      btn.textContent = "吉";
      button.textContent = "まあいい方だよ";
    } else if (n < 0.4) {
      btn.textContent = "小吉";
      button.textContent = "まだ耐えてるよ";
    } else if (n < 0.7) {
      btn.textContent = "末吉";
      button.textContent = "少し運が悪いね";
    } else if (n < 0.9) {
      btn.textContent = "凶";
      button.textContent = "結構ヤバイよ";
    } else {
      btn.textContent = "大凶";
      button.textContent = "もう死んだ方がいいかもね！";
    }
  })

    // switch (n) {
    //   case 0:
    //     btn.textContent = "大吉";
    //     break;
    //   case 1:
    //     btn.textContent = "小吉";
    //     break;
    //   case 2:
    //     btn.textContent = "凶";
    //     break;
    //   case 3:
    //     btn.textContent = "大凶";
    //     break;
    //   case 4:
    //     btn.textContent = "吉";
    //     break;

    // }
  // });

}