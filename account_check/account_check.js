function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);

  }
function isValidPassword(password) {
    const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&]).{9,}$/;
    return PASSWORD_REGEX.test(password);
  }
    
  // export emailForm
  module.exports = { isValidEmail, isValidPassword };