import express from 'express';
import { PrismaClient } from '@prisma/client'

const app = express();
app.use(express.json());

//para permitir  a conexao com o banco de dados criado pelo prisma
const prisma = new PrismaClient();

app.get('/games', async(req, res) => {
  const games = await prisma.game.findMany();

  return res.json(games)
})


app.get('/', (req, res) => {
  console.log('Acessou Root GET')
  res.send('acessou GET root')
})



app.listen(3333, () => { console.log('Servidor ON !')})