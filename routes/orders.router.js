const express = require('express');
const OrderService = require('../services/order.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createOrderSchema,
  getOrderSchema,
} = require('../schemas/order.schema');

const router = express.Router();
const service = new OrderService();

router.get('/', async (req, res) => {
  const Orders = await service.find();
  res.json(Orders);
});

router.get(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const Order = await service.findOne(id);
      res.json(Order);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newOrder = await service.create(body);
    res.status(201).json(newOrder);
  }
);

// router.patch(
//   '/:id',
//   validatorHandler(getOrderSchema, 'params'),
//   validatorHandler(updateOrderSchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const body = req.body;
//       const Order = await service.update(id, body);
//       res.json(Order);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
