function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);

  }
function isValidPassword(password) {
    const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&]).{9,}$/;
    return PASSWORD_REGEX.test(password);
  }
    
  // emailForm 함수를 내보냅니다.
  module.exports = { isValidEmail, isValidPassword };