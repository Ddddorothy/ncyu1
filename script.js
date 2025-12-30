// ===== 取得 HTML 元素 =====
const story = document.getElementById("story");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

//定義randomCheck()
function randomCheck() {
  const understood = Math.random() > 0.5;
  if (understood) {
    showEnding("good");
  } else {
    story.innerText = "😰 喔不，你好像沒有讀懂內容。\n你要再試著讀一次嗎？";
    btn1.innerText = "✔ 再讀一次";
    btn2.innerText = "✘ 不讀了";

    btn1.onclick = function () {
      story.innerText = "你決定再試著讀一次，希望這次能更懂。";
      btn1.innerText = "✎⋆⑅˚🕮 繼續讀";
      btn2.innerText = "😵 放棄";

      btn1.onclick = function () {
        story.innerText = "你繼續認真讀書...";
        btn1.innerText = "⋆☕︎ ˖ 再繼續";
        btn2.innerText = "😵 放棄";
        state = "study";
      };
      btn2.onclick = function () {
        showEnding("bad");
      };
      state = "study";
    };
    btn2.onclick = function () {
      showEnding("bad");
    };
    statr = "retry";
  }
}

/*
  state 用來記錄故事進行到哪個階段
  start  -> 一開始
  study  -> 有讀書
  phone  -> 滑手機
*/
let state = "start";

// ===== 按鈕 1 =====
btn1.onclick = function () {
  if (state === "start") {
    story.innerText = "你認真讀了幾個小時，時間來到晚上。";
    btn1.innerText = "⋆☕︎ ˖ 繼續熬夜讀";
    btn2.innerText = "😴 早點睡覺";
    state = "study";
  } else if (state === "study") {
    randomCheck();
  } else if (state === "retry") {
    story.innerText = "你決定再試著讀一次，希望這次能更懂。";
    btn1.innerText = "✎⋆⑅˚🕮 繼續讀";
    btn2.innerText = "😵 放棄";

    btn1.onclick = function () {
      story.innerText = "你繼續認真讀書...";
      btn1.innerText = "⋆☕︎ ˖ 再繼續";
      btn2.innerText = "😵 放棄";
      state = "study";
    };
    btn2.onclick = function () {
      showEnding("bad");
    };
    state = "retry";
  } else if (state === "phone") {
    story.innerText = "你決定趕快讀書，希望來得及。";
    btn1.innerText = "⋆☕︎ ˖ 繼續讀";
    btn2.innerText = "😵 放棄";
    state = "study";
  } else if (state === "end") {
    showEnding("bad");
  }
};

// ===== 按鈕 2 =====
btn2.onclick = function () {
  if (state === "start") {
    story.innerText = "你一不小心滑了很久，發現已經晚上了。";
    btn1.innerText = "(｡Ó﹏Ò｡) 趕快開始讀";
    btn2.innerText = "( ꩜ ᯅ ꩜;)ᶻ𝗓𐰁.ᐟ⁭ ⁭明天再說";
    state = "phone";
  } else if (state === "phone") {
    showEnding("bad");
  }  else if (state === "study") {
    showEnding("bad")
  } else if (state === "retry") {
    shoEnding("bad");
  }
};

// ===== 顯示結局 =====
function showEnding(type) {
  if (type === "good") {
    story.innerText = "🎉✧｡٩(ˊᗜˋ )و✧*｡ 恭喜你學會了！考試時你充滿信心。";
  } else if (type === "bad") {
    story.innerText = "💀 因為沒有準備好，考試時發揮失常。";
  }
  btn1.innerText = "⟳ 重新開始";
  btn2.style.display = "none";
  btn1.onclick = function () {
    location.reload();
  };

  state = "end";
}
