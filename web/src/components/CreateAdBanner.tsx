import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBanner() {
   return (

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

   )
}
