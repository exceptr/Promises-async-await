/* eslint-disable no-console */
import GameSavingLoader from './modules/GameSavingLoader';
import GameSavingLoaderAsyncAwait from './modules/GameSavingLoaderAsyncAwait';

GameSavingLoader.load().then(
  (saving) => {
    console.log(saving);
  },
  (error) => {
    console.log(error.message);
  },
);

(async () => {
  try {
    const saving = await GameSavingLoaderAsyncAwait.load();
    console.log(saving);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log('Задача завершена');
  }
})();
