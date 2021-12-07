const tokenFormat = /^[a-zA-Z0-9]{12}$/;

const validateToken = (token) => tokenFormat.test(token);

export default validateToken;
