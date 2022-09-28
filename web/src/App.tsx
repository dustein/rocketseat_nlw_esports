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

          <GameBanner />
          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src="/game-1.png" alt="" />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block text-sm'>League of Legends</strong>
              <span className='text-zinc-300 text-sm block'>4 anúncios</span>
            </div>
          </a>

          <a href="" className='relative'>
            <img src="/game-2.png" alt="" />
          </a>

          <a href="" className='relative'>
            <img src="/game-3.png" alt="" />
          </a>

          <a href="" className='relative'>
            <img src="/game-4.png" alt="" />
          </a>

          <a href="" className='relative'>
            <img src="/game-5.png" alt="" />
          </a>

          <a href="" className='relative'>
            <img src="/game-6.png" alt="" />
          </a>

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
