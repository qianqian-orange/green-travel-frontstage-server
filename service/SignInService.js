const SignIn = require('../model/SignIn');
const { query, transaction } = require('../init/mysql');

async function data({ year, month, user_id }) {
  try {
    let result = await query('select * from signIn where year = ? and month = ? and user_id = ? limit 1', [year, month, user_id]);
    if (result.length > 0) {
      return new SignIn({
        id: result[0].id,
        days: result[0].days ? result[0].days.split(',').map(item => parseInt(item, 10)).sort((a, b) => a - b) : [],
      });
    }
    await query('insert into signIn(year, month, days, user_id) values(?, ?, ?, ?)', [year, month, '', user_id ]);
    result = await query('select last_insert_id() as id');
    return new SignIn({
      id: result[0].id,
      days: [],
    });
  } catch(e) {
    Promise.reject(e);
  }
}

async function update({ days, id, integral, user }) {
  const value = (parseInt(user.integral * 100, 10) + parseInt(integral * 100, 10)) / 100;
  try {
    const execute = [
      ['update signIn set days = ? where id = ?', [days.sort((a, b) => a - b).join(','), id]],
      ['update user set integral = ? where id = ?', [value, user.id]],
    ];
    await transaction(execute);
    user.integral = value;
  } catch(e) {
    return Promise.reject(e);
  }
}

module.exports = {
  data,
  update,
};