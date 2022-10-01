interface GameBanneProps {
  bannerUrk: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBanneProps) {
  return (
    <div>
      <a href="" className='relative rounded-lg overflow-hidden'>
        <img src={props.bannerUrk} alt="" />
          <div className="text-center">
            <strong className='font-bold text-white block text-sm'>{props.title}</strong>
            <span className='text-zinc-300 text-xs block'>{props.adsCount} anúncio(s)</span>
          </div>
      </a>
    </div>
  )
}