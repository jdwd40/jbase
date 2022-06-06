
const {selectUsers} = require('../models/userModels')

exports.getUsers = async (req, res) => {
    const users = await selectUsers(req.query);
    res.send({ users });
  };