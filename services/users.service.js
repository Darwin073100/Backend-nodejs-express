const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize');

class UsersService{
  constructor(){}

  // metodo para crear usuarios
  async create(data){

  }

  // metodo para ver todos los usuarios
  async findAll(){
    const query = 'select * from task;';
    const [data] = await sequelize.query(query);
    return data;
  }

  // metodo para consultar un user por su id
  async findOne(id){

  }

  // metodo para actualizar users
  async update(id, change){

  }

  // metodo para eliminar
  async delete(id){

  }

}

module.exports = UsersService;
