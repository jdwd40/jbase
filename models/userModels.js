const db = require('../db/connection');

exports.selectUsers = async (req, res) => {
    return await db.query('SELECT * FROM users;').then((res) => {
      return res.rows;
    });
  };