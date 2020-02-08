const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
  console.log(err);
});

client.on('connect', () => {
  console.log('connected redis service success!');
});

module.exports = client;
