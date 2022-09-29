import { MagnifyingGlassPlus } from 'phosphor-react'
import { GameBanner } from './components/GameBanner';
import './styles/main.css';
import logoImage from './assets/logo.svg'
import { CreateAdBanner } from './components/CreateAdBanner';

function App() {

    return (
      <div className="max-w-[500px] mx-auto flex flex-col items-center my-10">
        <img src={logoImage} alt="" />

        <h1 className='text-2xl text-white font-black mt-10'>Projeto <span className='text-transparent bg-nlw-gradient bg-clip-text'>Treinamento</span> NLW eSports</h1>

        <div className='grid grid-cols-6 gap-4 mt-12'>

          <GameBanner bannerUrl='/game-1.png' title='Jogo 1' adsCount={5}/>
          <GameBanner bannerUrl='/game-2.png' title='Jogo 2' adsCount={2}/>
          <GameBanner bannerUrl='/game-3.png' title='Jogo 3' adsCount={5}/>
          <GameBanner bannerUrl='/game-4.png' title='Jogo 4' adsCount={5}/>
          <GameBanner bannerUrl='/game-5.png' title='Jogo 5' adsCount={5}/>
          <GameBanner bannerUrl='/game-6.png' title='Jogo 6' adsCount={5}/>


        </div>

        <CreateAdBanner />
      </div>
      )

}

export default App
