import { openAllCells, matrix } from "./createMinefield";
import { Cell, moveCount } from "./createCells";
import { timer } from "./timeAndMoves";
// import win from "../sounds/win.mp3"
const winAudio = new Audio("../sounds/win.mp3")
const loseAudio = new Audio("../sounds/lose.mp3")



export function loseGame() {
  openAllCells()
  setTimeout(function () {
    var result = confirm("Game over. Try again");

    if (result === true) {
      location.reload();
    }
  }, 500);
}

export function winGame() {
  const nonBombCells = matrix.flat().filter(cell => !cell.isBomb);
  if (Cell.openedNonBombCount === nonBombCells.length) {
    winAudio.play()
    setTimeout(function () {
      alert("Hooray! You found all mines in " + timer + " seconds and " + moveCount + "moves!");
      location.reload();
    }, 500);
  }
}
