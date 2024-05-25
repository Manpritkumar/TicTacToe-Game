let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newGame-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnX = true; // here will be two player X and O

const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach(box => {
  box.addEventListener("click", () => {
    console.log("box is clicking");
    if (turnX) {
      //player -X turn
      box.innerText = "X";
      turnX = false;
    } else {
      //player -O
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const showWinner = winnerVal => {
  msg.innerText = `Congratulation, Winner is ${winnerVal}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const resetGame = () => {
  turnX = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};
// function for enable the boxes after winner any one
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

// function for disable the boxes after winner any one
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const checkWinner = () => {
  for (let pattern of winningPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
