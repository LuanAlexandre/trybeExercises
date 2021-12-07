const newPassword = /[a-z]/;
const validatePassword = (password) => password.length >= 4 && password.length <= 8 && !newPassword.test(password);

export default validatePassword;
