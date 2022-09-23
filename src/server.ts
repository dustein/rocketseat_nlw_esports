import express from 'express';
import { PrismaClient } from '@prisma/client'

const app = express();
app.use(express.json());

//para permitir  a conexao com o banco de dados criado pelo prisma
const prisma = new PrismaClient();

app.get('/games', async(req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        }
      }
    }
  });

  return res.json(games)
})


app.get('/games/:id/ads', async (req, res) => {
  const gameIdSelecionado = req.params.id;

  const ads = await prisma.ad.findMany({
    where: {
      gameId : gameIdSelecionado,
    }
  })

  return res.json(ads)
})

app.get('/', (req, res) => {
  console.log('Acessou Root GET')
  res.send('acessou GET root')
})



app.listen(3333, () => { console.log('Servidor ON !')})