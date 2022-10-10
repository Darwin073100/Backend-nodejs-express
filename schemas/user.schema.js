const Joi = require('joi');

const id = Joi.number().integer();
const password = Joi.string().min(8);
const email = Joi.string().email();

const createUserSchema = Joi.object({
  password: password.required(),
  email: email.required(),
});

const updateUserSchema = Joi.object({
  password,
  email,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
};
