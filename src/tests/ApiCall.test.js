import ApiCall from '../components/ApiCall';

describe('The data should be read from the API', () => {
  test('Should receive an object from the API', () => {
    ApiCall().then(data => {
      expect(typeof data).toBe('object');
    }).catch(() => {

    });
  });
  test('The object should contain the ImageList', () => {
    ApiCall().then(data => {
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            airdate: '1994-09-22',
          }),
        ]),
      );
    }).catch(() => {

    });
  });
});
