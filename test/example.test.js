const assert = require('assert');
const User = require('../src/modules/user/models/user.entity');

describe('Simple Math Test', () => {
  it('should return 2', () => {
    assert.equal(1 + 1, 2);
  });
  it('should return 9', () => {
    assert.equal(3 * 3, 9);
  });
  it('test user', async () => {
    const count = await User.count();
    await User.create({ username: 'DOXA' });
    const count2 = await User.count();
    assert.equal(count + 1, count2);
  });
});
