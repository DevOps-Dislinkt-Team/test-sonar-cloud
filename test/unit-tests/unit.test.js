const assert = require('assert');
const User = require('../src/modules/user/models/user.entity');
const sequelize = require('../src/services/db/database-setup.service');

describe('Unit tests:', () => {
  it('Creating user', async () => {
    const transaction = await sequelize.transaction();
    try {
      const count1 = await User.count({ transaction });
      await User.create({ username: 'Someone' }, { transaction });
      const count2 = await User.count({ transaction });
      assert.equal(count1 + 1, count2);
    } catch (err) {
      throw err;
    } finally {
      await transaction.rollback();
    }
  });
  it('Deleting user', async () => {
    const transaction = await sequelize.transaction();
    try {
      const count1 = await User.count({ transaction });
      await User.create({ username: 'Someone' }, { transaction });
      const count2 = await User.count({ transaction });
      assert.equal(count1 + 1, count2);
      await User.destroy({ where: { username: 'Someone' }, transaction });
      const count3 = await User.count({ transaction });
      assert.equal(count2 - 1, count3);
    } catch (err) {
      throw err;
    } finally {
      await transaction.rollback();
    }
  });
});
