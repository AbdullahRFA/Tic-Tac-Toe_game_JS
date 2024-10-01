let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetButton");
let newGame = document.querySelector("#new-btn");
let message_container = document.querySelector(".message-container");
let message = document.querySelector("#msg");
let turnO = true;
var count=0;

let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  let turnO = true;
  enableBoxes();
  message_container.classList.add("hide");
  count=0;
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;
   var check= checkWinner();
   if(count==9 && !check){
    Draw();
   }
  });
});

function showWinner(winner) {
  message.innerHTML = `Congratulations, Winner is ${winner}`;
  message_container.classList.remove("hide");
  disableBoxes();
}
function Draw(){
    message.innerHTML="Draw!, Play Again";
    message_container.classList.remove("hide");
    disableBoxes();
}
let position1value, position2value, position3value;
const checkWinner = () => {
  for (let pattern of winPattern) {
    position1value = boxes[pattern[0]].innerText;
    position2value = boxes[pattern[1]].innerText;
    position3value = boxes[pattern[2]].innerText;

    if (position1value != "" && position2value != "" && position3value != "") {
      if (
        position1value === position2value &&
        position2value === position3value
      ) {
        showWinner(position1value);
        return true;
      }
    }
  }
};
console.log(count);
newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
