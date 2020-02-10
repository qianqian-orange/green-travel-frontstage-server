const CLIENT_ID = '00cd9f0acd7169fc3a25';
const SCOPE = 'user:email';

module.exports = {
  CLIENT_ID,
  CLIENT_SECRET: 'dd3fd53fae291cc8577a241c2cf1befd3dc880bd',
  GITHUB_OAUTH_URL: `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`,
};