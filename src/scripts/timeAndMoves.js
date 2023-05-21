import { countTime } from "./createCells";

let intervalId;
export let timer = 0;

export function startTimer() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      timer++;
      countTime.textContent = "Time: " + timer;
    }, 1000);
  }
}




