const sequelize = require('sequelize');

const db = new sequelize('sql10603692', 'sql10603692', 'XarQKbWY7y', {
    host: "sql10.freemysqlhosting.net",
    dialect: "mysql"
});

module.exports = db