import './styles/main.css';
import logoImage from './assets/logo.svg'

function App() {

    return (
      <div className="max-w-[500px] mx-auto flex flex-col items-center my-10">
        <img src={logoImage} alt="" />

        <h1 className='text-2xl text-white font-black mt-10'>Projeto <span className='text-yellow-500'>Treinamento</span> NLW eSports</h1>

        <div className='grid grid-cols-6 gap-4 mt-12'>

          <a href="">
            <img src="/game-1.png" alt="" />
          </a>

          <a href="">
            <img src="/game-2.png" alt="" />
          </a>

          <a href="">
            <img src="/game-3.png" alt="" />
          </a>

          <a href="">
            <img src="/game-4.png" alt="" />
          </a>

          <a href="">
            <img src="/game-5.png" alt="" />
          </a>

          <a href="">
            <img src="/game-6.png" alt="" />
          </a>

        </div>
      </div>
      )


}

export default App
