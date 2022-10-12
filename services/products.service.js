const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ProductsService{
  constructor(){}

  async create(data){
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async findAll(){
    const products = await models.Product.findAll({
      include: ['category']
    });
    return products;
  }

  async findOne(id){
    return id;
  }

  async update(id, change){
    return null;
  }

  async delete(id){
    return { id };
  }

}

module.exports = ProductsService;
