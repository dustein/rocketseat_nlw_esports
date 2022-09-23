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
    
    //para nao exibir o campo "discord" nesta rota, vamos selecionar apenas os campos que queremos retornar 
    
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true
    },

    where: {
      gameId : gameIdSelecionado,
    },
//ordenar pela data de criacao do ad
    orderBy: {
      createdAt: 'desc'
    }

    
  })

  return res.json(ads)
})

app.get('/', (req, res) => {
  console.log('Acessou Root GET')
  res.send('acessou GET root')
})



app.listen(3333, () => { console.log('Servidor ON !')})