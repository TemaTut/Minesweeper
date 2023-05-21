import { createCells } from "./createCells"
import { random } from "./random"
import { winGame } from "./endOfTheGame"

export let matrix = []

function addBombs(bombs) {

  let currentBombCount = bombs

  const matrixHeight = matrix.length
  const matrixWidth = matrix[0].length

  while (currentBombCount) {
    const x = random(0, matrixWidth - 1)
    const y = random(0, matrixHeight - 1)

    const matrixElement = matrix[y][x]

    if (!matrixElement) {
      matrix[y][x] = 1
      currentBombCount--

    }
  }
}

export function findBombsNearby(coordinates) {
  const { x, y } = coordinates

  const n1 = matrix[y - 1]?.[x]
  const n2 = matrix[y - 1]?.[x + 1]
  const n3 = matrix[y]?.[x + 1]
  const n4 = matrix[y + 1]?.[x + 1]
  const n5 = matrix[y + 1]?.[x]
  const n6 = matrix[y + 1]?.[x - 1]
  const n7 = matrix[y]?.[x - 1]
  const n8 = matrix[y - 1]?.[x - 1]

  return [
    n1,
    n2,
    n3,
    n4,
    n5,
    n6,
    n7,
    n8,
  ].filter(item => typeof item !== 'undefined')

}

export function openAllCells() {
  matrix.forEach((matrixLine) => {
    matrixLine.forEach((cell) => {
      if (cell.isBomb) {
        cell.open()
      }
    })
  })
  winGame()
}

export function createMinefield(width = 10, height = 10, bombs = 10) {
  matrix = Array.from({ length: height }, () => Array.from({ length: width }, () => 0));

  addBombs(bombs)

  matrix.forEach((matrixLine, y) => {
    matrixLine.forEach((matrixElement, x) => {
      const newCell = createCells(Boolean(matrixElement), { x, y })

      matrix[y][x] = newCell;
    })
  })
}