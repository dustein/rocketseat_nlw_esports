import express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.log('Acessou Root GET')
  res.send('acessou GET root')
})

app.listen(3333)