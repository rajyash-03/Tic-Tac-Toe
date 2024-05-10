const boxee = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#btn");
let newgameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let count = 0;
const resetGame = () => {
  turnO = true;
  enableBoxes();
  count = 0;
  msgContainer.classList.add("hide");
};

boxee.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    count++;
    console.log(count)
    box.disabled = true;
    checkWinner();
  });
});

const draw = () => {
  msg.innerHTML = "And it's a Draw";
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const enableBoxes = () => {
  for (let box of boxee) {
    box.disabled = false;
    box.innerHTML = "";
  }
};
const disableBoxes = () => {
  for (let box of boxee) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  msg.innerHTML = `Congrats!! Winner is player ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxee[pattern[0]].innerHTML;
    let pos2Val = boxee[pattern[1]].innerHTML;
    let pos3Val = boxee[pattern[2]].innerHTML;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
      else if(count===9){
        draw()
      }
    }
  }
};

newgameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
