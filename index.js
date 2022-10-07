const express = require('express');
const cors = require('cors');
const { logErrors, errorHandler , boomErrorHandler} = require('./middlewares/error.handler');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['https://localhost:8080', 'https://myapp.com'];
const options = {
  origin: (origin, callback)=>{
    if(whitelist.includes()){
      callback(null, true);
    }else{
      callback(new Error('No permitido'));
    }
  }
};

app.use(cors());

app.get('/',(req,res)=>{
  res.send('Hola mi serve en express');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port,()=>{
  console.log('Mi port: ' + port)
});
