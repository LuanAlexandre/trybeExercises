import crypto from 'crypto';

const generateToken = () => crypto.randomBytes(12).toString('hex');

export default generateToken;
