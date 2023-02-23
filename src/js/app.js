/* eslint-disable no-console */
import GameSavingLoader from './modules/GameSavingLoader';

GameSavingLoader.load().then(
  (saving) => {
    console.log(saving);
  },
  (error) => {
    console.log(error.message);
  },
);
