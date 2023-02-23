import GameSavingLoader from '../modules/GameSavingLoader';

test('GameSavingLoader', () => {
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
  return GameSavingLoader.load().then((saving) => expect(expectedResult).toEqual(saving));
});
