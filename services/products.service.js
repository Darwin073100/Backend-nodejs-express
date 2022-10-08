const faker = require('faker');
const boom = require('@hapi/boom');

class ProductsService{
  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 10;

    for(let index = 0; index <limit; index++){
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl(),
      });
    }
  }

  async create(data){
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async findAll(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(this.products)
      }, 3000);
    });
  }

  async findOne(id){
    const product = this.products.find(item => item.id === id);
    if(!product){
      throw boom.notFound('product not found');
    }
    return product;
  }

  async update(id, change){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('Produc not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...change
    };

    return this.products[index];
  }

  async delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('Product not found');
    }

    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;
