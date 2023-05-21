import { createMinefield } from './createMinefield';
import { appElement } from './createCells';
import '../styles/index.scss';

export function start() {
  appElement.innerHTML = ''
  createMinefield();
}

start()
