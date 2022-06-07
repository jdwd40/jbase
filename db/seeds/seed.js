const db = require('../connection');
const format = require('pg-format');
const { formatUsersData } = require('../utils/formatData');

const seed = (data) => {
  const { users } = data;

  return db
    .query(`DROP TABLE IF EXISTS users cascade;`)
    .then(() => {
      return db.query(`
        CREATE TABLE users (
          user_id SERIAL PRIMARY KEY,
          name VARCHAR NOT NULL,
          email VARCHAR NOT NULL,
          password VARCHAR NOT NULL
        );`);
    })
    .then(() => {
      const formattedUsers = formatUsersData(users);
      const sql = format(
        `INSERT INTO users (name, email, password) 
        VALUES %L RETURNING *;`,
        formattedUsers
      );
      return db.query(sql);
    });
};

module.exports =  seed;
