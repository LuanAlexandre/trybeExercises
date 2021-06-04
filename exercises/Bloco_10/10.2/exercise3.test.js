const getUserName = require('./exercise3');

describe('behaviour', () => {
  it('in success case', async () => {
    const user = await getUserName(4);
      expect(user).toBe('Mark');
  });

  it('in fail case', async () => {
    try {
      await getUserName(6);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 6 not found.'})
    }
  });
});
