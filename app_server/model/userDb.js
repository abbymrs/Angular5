const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const userAdpater = new FileSync('../app_server/data/users.json');
module.exports = low(userAdpater);