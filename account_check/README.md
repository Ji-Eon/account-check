
# account-check

`account-check` is a simple library for validating email and password formats. The library helps to ensure that email addresses are correctly formatted and passwords meet basic security criteria.

## Installation

Install the package using npm:

```bash
npm install account-check
```

## Functions

### `isValidEmail(email: string): boolean`

This function checks if a given email address is valid.

#### Parameters
- `email` (**string**) - The email address to be validated.

#### Returns
- **boolean**: Returns `true` if the email is valid, and `false` if the email is invalid.

#### Example Usage

```javascript
const { isValidEmail } = require('account-check');

console.log(isValidEmail('test@example.com')); // true (valid email)
console.log(isValidEmail('invalid-email'));    // false (invalid email)
```

### `isValidPassword(password: string): boolean`

This function checks if a given password meets the following criteria:
- At least 9 characters long
- Contains at least one letter
- Contains at least one number
- Contains at least one special character

#### Parameters
- `password` (**string**) - The password to be validated.

#### Returns
- **boolean**: Returns `true` if the password is valid, and `false` if the password is invalid.

#### Example Usage

```javascript
const { isValidPassword } = require('account-check');

console.log(isValidPassword('StrongPass1!')); // true (valid password)
console.log(isValidPassword('weakpass'));     // false (invalid password)
```

### Test Cases

Here are some test cases to ensure that the validation functions work as expected:

```javascript
const { isValidEmail, isValidPassword } = require('./account_check');

// Email Tests
test('Returns true for a valid email', () => {
  expect(isValidEmail('test@example.com')).toBe(true);
});

test('Returns false for an invalid email', () => {
  expect(isValidEmail('invalid-email')).toBe(false);
});

// Password Tests
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
```

## Updates and Contact

Feel free to contact me via email if you need further updates or improvements to this library. If additional validation logic is required, I will be happy to add it.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
