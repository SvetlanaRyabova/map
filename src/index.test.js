import ErrorRepository from './index.js';

test('instanse', () => {
  expect(new ErrorRepository()).toBeInstanceOf(ErrorRepository);
});

test('translate', () => {
  const errorrepo = new ErrorRepository();
  expect(errorrepo.translate(404)).toBe('Not Found');
});

test('translate unknown error', () => {
  const errorrepo = new ErrorRepository();
  expect(errorrepo.translate(504)).toBe('Unknown error');
});
