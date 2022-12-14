import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client'
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes';
import { convertMinutesToHourString } from './utils/convert-minutes-to-hour-string';

const app = express();
app.use(express.json());
app.use(cors());
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
  
  const gameId = req.params.id;

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
      gameId,
    },
//ordenar pela data de criacao do ad
    orderBy: {
      createdAt: 'desc'
    }
  
  })


  // return res.json(ads)
  //formatar a resp para exbir os nueros do array do weekdays um em cada linha
  return res.json(ads.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hourStart: convertMinutesToHourString(ad.hourStart),
      hourEnd: convertMinutesToHourString(ad.hourEnd)
    }
  }))
})

//rota para exibir o campo discord
app.get('/ads/:id/discord', async (req, res) => {
  const adId = req.params.id;
  const ad = await prisma.ad.findUniqueOrThrow({
    
    select: {
      discord: true,
    },
    
    where: {
      id: adId,
    }
  })

  return res.json({
    discord: ad.discord,
  })
})

app.get('/', (req, res) => {
  console.log('Acessou Root GET')
  res.send('acessou GET root')
})

app.post('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id;
  const body = req.body;

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hourStart: convertHourStringToMinutes(body.hourStart),
      hourEnd: convertHourStringToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel
    }
  })


  return res.json(ad)


})


app.listen(3333, () => { console.log('Servidor ON porta 3333!')})