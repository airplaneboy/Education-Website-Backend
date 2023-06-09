//TODO:  Delete admin controller before using on production
const CustomErrors = require('../errors');
const Users = require('../models/User');
const { StatusCodes } = require('http-status-codes');

const getAllUsers = async (req, res) => {
  const user = await Users.find({}).select('-password');
  if (!user) throw new CustomErrors.BadRequestError('Unable to get users');
  res.status(StatusCodes.OK).json({ users: user });
};

module.exports = { getAllUsers };
