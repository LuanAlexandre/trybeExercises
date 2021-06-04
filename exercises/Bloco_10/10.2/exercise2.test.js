const getUserName = require('./exercise2');

describe('behaviour', () => {
  it('in success case', () => {
    return getUserName(4).then((user) => {
      expect(user).toBe('Mark');
    });
  });

  it('in fail case', () => {
    return getUserName(6).catch((error) => {
      expect(error).toEqual({ error: 'User with 6 not found.' });
    });
  });
});