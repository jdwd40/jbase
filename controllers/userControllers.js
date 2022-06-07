const {
  selectUsers,
  selectUserById,
  createUser,
} = require('../models/userModels');

exports.getUsers = async (req, res) => {
  const users = await selectUsers(req.query);
  res.send({ users });
};

exports.getUserById = async (req, res) => {
  const { user_id } = req.params;
  const user = await selectUserById(user_id);
  res.status(200).send(user);
};

exports.newUser = async (req, res) => {
  const {name, email, password} = req.body;
  const nUser = await createUser({ name, email, password });
  res.status(201).send( nUser );
};
