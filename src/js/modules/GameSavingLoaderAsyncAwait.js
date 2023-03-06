import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoaderAsyncAwait {
  static async load() {
    const data = await read();
    const response = await json(data);
    const result = JSON.parse(response);
    return new GameSaving(result);
  }
}
