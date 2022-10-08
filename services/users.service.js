const faker = require('faker');
const boom = require('@hapi/boom');

class UsersService{
  constructor(){
    this.users = [];
    this.generate();
  }

  // metodo para generarr los usuarios
  generate(){
    const limit = 10;
    for(let index = 0; index < limit; index++){
      this.users.push({
        id: faker.datatype.uuid(),
        userName: faker.internet.userName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
      });
    }
  }

  // metodo para crear usuarios
  async create(data){
    const newUser={
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;
  }

  // metodo para ver todos los usuarios
  async findAll(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(this.users)
      }, 3000);
    });
  }

  // metodo para consultar un user por su id
  async findOne(id){
    const user = this.users.find(item => item.id === id);
    if(!user){
      throw boom.notFound('user not found');
    }else{
      return user;
    }
  }

  // metodo para actualizar users
  async update(id, change){
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('user not fount');
    }else{
      const user = this.users[index];
      this.users[index] = {
        ...user,
        ...change
      }
    }
    return this.users[index];
  }

  // metodo para eliminar
  async delete(id){
    const index = this.users.findIndex(item => item.id = id);
    if(index === -1){
      throw boom.notFound('user not found');
    }else{
      this.users.splice(index, 1);
    }
    return { id };
  }

}

module.exports = UsersService;
