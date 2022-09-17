const assert = require('assert');
const User = require('../src/modules/user/models/user.entity');
const sequelize = require('../src/services/db/database-setup.service');

describe('Simple Math Test', () => {
  it('should return 2', () => {
    assert.equal(1 + 1, 2);
  });

  it('should return 9', () => {
    assert.equal(3 * 3, 9);
  });

  it('test user', async () => {
    const transaction = await sequelize.transaction();
    try {
      const count = await User.count({ transaction });
      await User.create({ username: 'DOXA' }, { transaction });
      const count2 = await User.count({ transaction });
      assert.equal(count + 1, count2);
    } catch (err) {
      throw err;
    } finally {
      await transaction.rollback();
    }
  });
});
