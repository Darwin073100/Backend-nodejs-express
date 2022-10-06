const express = require('express');
const { logErrors, errorHandler , boomErrorHandler} = require('./middlewares/error.handler');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

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
