import { MagnifyingGlassPlus } from 'phosphor-react'
import { GameBanner } from './components/GameBanner';
import './styles/main.css';
import logoImage from './assets/logo.svg'

function App() {

    return (
      <div className="max-w-[500px] mx-auto flex flex-col items-center my-10">
        <img src={logoImage} alt="" />

        <h1 className='text-2xl text-white font-black mt-10'>Projeto <span className='text-transparent bg-nlw-gradient bg-clip-text'>Treinamento</span> NLW eSports</h1>

        <div className='grid grid-cols-6 gap-4 mt-12'>

          <GameBanner bannerUrl='/game-1.png' title='League of Legends' adsCount={5}/>
          <GameBanner bannerUrl='/game-2.png' title='Jogo 2' adsCount={2}/>
          <GameBanner bannerUrl='/game-3.png' title='League of Legends' adsCount={5}/>
          <GameBanner bannerUrl='/game-4.png' title='League of Legends' adsCount={5}/>
          <GameBanner bannerUrl='/game-5.png' title='League of Legends' adsCount={5}/>
          <GameBanner bannerUrl='/game-6.png' title='League of Legends' adsCount={5}/>


        </div>

        <div className='bg-slate-800 px-8 py-6 mt-8 self-stretch rounded-lg flex justify-between items-center'>
          <div>
          <strong className='text-white text-2xl font-black block'>Vamos Jogar</strong>
          <span className='text-zinc-400'>Publicar anúncio</span>
          </div>
          <button className='py-3 px-4 bg-gray-500 hover:bg-slate-600 text-zinc-100 rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24}/>
            Publicar
          </button>
        </div>
      </div>
      )

}

export default App
