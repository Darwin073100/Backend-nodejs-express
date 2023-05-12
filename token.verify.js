const jwt = require('jsonwebtoken');

const secret = 'myCat';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJzdXN0b21lciIsImlhdCI6MTY4Mzc4NDQ5MX0.0Wcw_r_E6iba-u3MMU1Ygnie7kMD2vfTWHhD3WRRL5c';

const payload = {
  sub: 1,
  role: 'sustomer'
}

function verifyToken(token, secret){
  return jwt.verify(token, secret);
}

const verify = verifyToken(token, secret);
console.log(verify);
