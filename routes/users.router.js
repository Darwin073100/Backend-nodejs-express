const express = require('express');
const UsersService = require('../services/users.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createUserSchema,
  updateUserSchema,
  getUserSchema
} = require('../schemas/user.schema');

const router = express.Router();
const service = new UsersService();

// petición para ver todos los users
router.get('/',async (req, res)=>{
  const users = await service.findAll();
  res.json(users);
});

// peticion para buscar un user por su id
router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next)=>{
    try {
      const { id } = req.params;
      const user = await service.findOne(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

// controller para crear users
router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res)=>{
    const body = req.body;
    const newUser = await service.create(body);
    res.status(201).json(newUser);
  }
);

// controller para actualizar un user
router.patch(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async(req, res, next) =>{
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

// controller para eliminar un user
router.delete(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res)=>{
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
  }
);

module.exports = router;
