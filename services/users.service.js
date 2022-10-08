const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');

class UsersService{
  constructor(){
    this.pool = pool;
    this.pool.on('error', (err)=> console.error(err));
  }

  // metodo para crear usuarios
  async create(data){

  }

  // metodo para ver todos los usuarios
  async findAll(){
    const query = 'select * from task;';
    const rta = await this.pool.query(query);
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
