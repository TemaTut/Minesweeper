import { findBombsNearby } from "./createMinefield"
import { loseGame, winGame } from "./endOfTheGame"
import { startTimer } from "./timeAndMoves"
import { start } from "."

const wrapper = document.createElement('div')
wrapper.id = 'wrapper'
document.body.appendChild(wrapper)

const header = document.createElement('div')
header.id = 'header'
wrapper.appendChild(header)

export const appElement = document.createElement('div')
appElement.id = 'game-field'
wrapper.appendChild(appElement)

export const countTime = document.createElement('div')
countTime.id = 'countTime'
header.appendChild(countTime)
countTime.textContent = "Time:" + " 0"

const newGame = document.createElement('button')
newGame.id = 'newGame'
header.appendChild(newGame)
newGame.textContent = "New Game"

const countMove = document.createElement('div')
countMove.id = 'countMove'
header.appendChild(countMove)
countMove.textContent = "Move:" + " 0"


appElement.addEventListener('click', () => {
  startTimer();
});

export class Cell {
  constructor(isBomb, coordinates) {
    this.isBomb = isBomb
    this.coordinates = coordinates
    winGame()
  }

  setCellValue(value) {
    this.value = value
  }

  setCellType() {
    if (this.isBomb) {
      this.setCellValue('💣');
      return
    }

    const allCellsNearby = findBombsNearby(this.coordinates);
    let bombs = 0;

    allCellsNearby.forEach(element => {
      if (element === 1 || element.isBomb) {
        bombs++
      }
    });

    if (bombs) {
      this.setCellValue(bombs)
    }
  }

  showCellvalue() {
    this.cellElement.innerHTML = this.value || ''
  }

  setFlag(isFlagged) {
    this.isFlagged = isFlagged
    this.cellElement.innerHTML = isFlagged ? "🚩" : ""
  }

  static openedNonBombCount = 0;

  open() {
    this.isOppened = true
    this.cellElement.classList.remove('creating')
    this.showCellvalue()

    if (!this.isBomb) {
      Cell.openedNonBombCount++;
      winGame();
    }
  }

  cellClick(allowOpenNumber = false) {
    if (this.isFlagged) {
      this.setFlag(false);
      return
    }
    if (!this.value && !this.isOppened) {
      this.open()
      const allCellsNearby = findBombsNearby(this.coordinates);
      allCellsNearby.forEach(element => {
        if (!element.isOppened) {
          element.cellClick(true)
        }
      });
    } else if ((this.value && allowOpenNumber) || typeof this.value === 'number') {
      this.open()
      winGame()
    } else if (this.isBomb) {
      loseGame()
    }
    this.showCellvalue()
  }

  createCellOnArea() {
    const cellElement = document.createElement('div')
    cellElement.classList.add('box')
    cellElement.classList.add('creating')
    cellElement.addEventListener('click', handleClick);
    if (this.value) {
      cellElement.classList.add(`cell-count-${this.value}`)
    }
    this.cellElement = cellElement
    this.cellElement.addEventListener('click', () => this.cellClick())
    this.cellElement.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      this.setFlag(true)
    })
    appElement.appendChild(cellElement)
  }


}

export function createCells(isBomb, coordinates) {
  const newCell = new Cell(isBomb, coordinates)

  newCell.setCellType()
  newCell.createCellOnArea()

  return newCell
}



export let moveCount = 0;

function handleClick() {
  moveCount++;
  countMove.textContent = "Move: " + moveCount;
}

newGame.addEventListener('click', () => {
  start()
})

