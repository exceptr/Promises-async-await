import GameSavingLoaderAsyncAwait from '../modules/GameSavingLoaderAsyncAwait';

test('GameSavingLoaderAsyncAwait', async () => {
  const expectedResult = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  const data = await GameSavingLoaderAsyncAwait.load();
  expect(expectedResult).toEqual(data);
});
