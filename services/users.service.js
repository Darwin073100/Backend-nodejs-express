const boom = require('@hapi/boom');
const getConnection = require('../libs/postgres');
class UsersService{
  constructor(){}

  // metodo para crear usuarios
  async create(data){

  }

  // metodo para ver todos los usuarios
  async findAll(){
    const client = await getConnection();
    const rta = await client.query('select * from task');
    return rta.rows;
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
