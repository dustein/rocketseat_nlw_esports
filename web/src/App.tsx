import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import './styles/main.css';
import logoImage from './assets/logo.svg'
import { useEffect, useState } from 'react';
import { response } from 'express';

interface Game {
  id: string;
  title: string;
  bannerUrk: string;
  _count: {
    ads: number;
  }
}

function App() {

    const [games, setGames] = useState<Game[]>([]);

    //OBS: no segundo parametro do useEffect, se deixar o array vazio [], a função que colocarmos no primeiro parâmetro vai ser rodada apenas uma vez, não importa quantas vezes o useState refaça a renderização da aplicação, o que é ótimo para o propósito que estamos usando agora, que seria trazer dados de uma API.
    //Verificar funcionamento da API de Fetch
    useEffect(() => {
      fetch('http://localhost:3333/games')
        .then(response => response.json())
        .then(data => {
          setGames(data)
        })
    }, [])

    return (
      <div className="max-w-[500px] mx-auto flex flex-col items-center my-10">
        <img src={logoImage} alt="" />

        <h1 className='text-2xl text-white font-black mt-10'>Projeto <span className='text-transparent bg-nlw-gradient bg-clip-text'>Treinamento</span> NLW eSports</h1>

        <div className='grid grid-cols-6 gap-4 mt-12'>

          {games.map(game => {
            return (
              <GameBanner key={game.id} bannerUrk={game.bannerUrk} title={game.title} adsCount={game._count.ads}/>
            )
          })}
   


        </div>

        <CreateAdBanner />

      </div>
      )

}

export default App
