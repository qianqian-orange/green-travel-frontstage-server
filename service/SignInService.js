const SignIn = require('../model/SignIn');
const { query, transaction } = require('../init/mysql');
const { integrals } = require('../config/conversion');
const UserService = require('./UserService');

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
    result = await query('select id from signIn where year = ? and month = ? and user_id = ?', [
      year,
      month,
      user_id,
    ]);
    return new SignIn({
      id: result[0].id,
      days: [],
    });
  } catch(e) {
    Promise.reject(e);
  }
}

async function update({ id, user_id }) {
  try {
    const date = new Date();
    const result = await query('select * from signIn where id = ? limit 1', [id]);
    if (result.length === 0) return Promise.reject('签到记录不存在！');
    if (result[0].year !== date.getFullYear() || result[0].month !== date.getMonth() + 1 || result[0].user_id !== user_id) return Promise.reject('签到记录不匹配！');
    const day = date.getDate();
    const days = result[0].days ? result[0].days.split(',').map(item => parseInt(item, 10)).sort((a, b) => a - b) : [];
    if (days.includes(day)) return Promise.reject('今日已签到');
    let length = 0;
    for (let i = 0, j = days.length - 1; i < days.length; i += 1, j -= 1) {
      if (days[j] !== day - i - 1) break;
      length += 1;
    }
    const integral = integrals[length];
    days.push(day);
    const user = await UserService.find(user_id);
    const value = (parseInt(user.integral * 100, 10) + parseInt(integral * 100, 10)) / 100;
    const execute = [
      ['update signIn set days = ? where id = ?', [days.join(','), id]],
      ['update user set integral = ? where id = ?', [value, user_id]],
    ];
    await transaction(execute);
    return value;
  } catch(e) {
    return Promise.reject(e);
  }
}

module.exports = {
  data,
  update,
};