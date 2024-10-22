const { isValidEmail, isValidPassword } = require('./account_check');

test('Returns Valid Email true', () => {
  expect(isValidEmail('test@example.com')).toBe(true);
});

test('Rreturns false ValidEmail false', () => {
  expect(isValidEmail('invalid-email')).toBe(false);
});

test('Returns true for a valid password', () => {
  expect(isValidPassword('StrongPass1!')).toBe(true);
});

test('Returns false for an invalid password (too short)', () => {
  expect(isValidPassword('short')).toBe(false);
});

test('Returns false for an invalid password (missing special character)', () => {
  expect(isValidPassword('NoSpecialChar1')).toBe(false);
});

test('Returns false for an invalid password (missing number)', () => {
  expect(isValidPassword('NoNumbers!')).toBe(false);
});
test('Returns false for an invalid password (missing letter)', () => {
  expect(isValidPassword('12345678!')).toBe(false);
});
