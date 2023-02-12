const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { models }= require('../libs/sequelize');

class UsersService{
  constructor(){}

  // metodo para crear usuarios
  async create(data){
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await models.User.create({
      ...data,
      password: hash
    });
    delete newUser.dataValues.password;
    return newUser;
  }

  // metodo para ver todos los usuarios
  async findAll(){
    const rta = await models.User.findAll({
      include: ['customer']
    });
    return rta;
  }

  // metodo para consultar un user por su id
  async findOne(id){
    const user = await models.User.findByPk(id);
    if(!user){
      throw boom.notFound('User not found');
    }
    return user;
  }

  // metodo para actualizar users
  async update(id, change){
    const user = await this.findOne(id);
    const rta = await user.update(change);
    return rta;
  }

  // metodo para eliminar
  async delete(id){
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }

}

module.exports = UsersService;
