const db = require('../db/connection');

exports.selectUsers = async (req, res) => {
  return await db.query('SELECT * FROM users;').then((res) => {
    return res.rows;
  });
};

exports.selectUserById = async (user_id) => {
  const user = await db
    .query(`SELECT * FROM users WHERE user_id=$1`, [user_id])
    .then((result) => result.rows[0]);
  //console.log(company);
  return user;
};

exports.createUser = async ({ name, email, password }) => {
    const newUser = await db
      .query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *;',
        [name, email, password]
      )
      .then((result) => result.rows[0]);
    return newUser;
  };