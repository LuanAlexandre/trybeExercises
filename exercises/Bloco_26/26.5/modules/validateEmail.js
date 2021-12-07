const newEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
const validateEmail = (email) => newEmail.test(email);

export default validateEmail;
