import express from 'express';

const app = express();

app.get('/', () => {
  console.log('Acessou Root GET')
})

app.listen(3333)