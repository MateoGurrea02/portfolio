import codigo from '../assets/codigo.jpg'

export default function Background() {
  return (
    <div className='fixed -z-10 w-full h-full bg-no-repeat' style={{backgroundImage:`url(${codigo})`}}>
      <div className='absolute backdrop-blur-[5px] w-full h-full bg-opacity-60'></div>
    </div>      
  )
}
