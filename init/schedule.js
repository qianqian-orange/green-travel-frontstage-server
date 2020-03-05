const schedule = require('node-schedule');
const { query } = require('./mysql');
 
const job = schedule.scheduleJob('0 0 0 * * *', () => {
  query('delete from user_task');
});

// job.cancel()