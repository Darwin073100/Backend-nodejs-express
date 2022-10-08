const Joi = require('joi');

const id = Joi.string().uuid();
const userName = Joi.string().max(20);
const password = Joi.string().min(8);
const email = Joi.string().email();

const createUserSchema = Joi.object({
  userName: userName.required(),
  password: password.required(),
  email: email.required(),
});

const updateUserSchema = Joi.object({
  userName: userName,
  password: password,
  email: email,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
};
