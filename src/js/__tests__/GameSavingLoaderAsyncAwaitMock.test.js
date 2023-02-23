import GameSavingLoaderAsyncAwait from '../modules/GameSavingLoaderAsyncAwait';
import read from '../modules/reader';

jest.mock('../modules/reader');

describe('GameSavingLoaderAsyncAwait', () => {
  test('Проверка ошибки', async () => {
    const textError = 'Oops';
    read.mockRejectedValue(new Error(textError));

    expect(GameSavingLoaderAsyncAwait.load()).rejects.toThrow(textError);
  });
});
