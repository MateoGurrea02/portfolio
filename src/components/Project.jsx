import { Children } from 'react'

export default function Project({imageList,title,description,children}) {
  return (
    <div className='mt-40'>
      <div className='overflow-scroll bg-gray-800 no-scrollbar touch-pan-x w-full' >
        <div className='flex ml-[10%]'>
          {imageList.map((image) => (
            <img src={image} alt='devtree' className='w-2/5 m-5' key={image}/>
          ))}
        </div>
      </div>
      <h2 className='text-5xl text-white font-black ml-[12%]'>{title}</h2>
      <div className='text-3xl text-emerald-600 font-bold ml-[12%] flex'>
        {children}
      </div>
      <p className='text-lg text-white ml-[12%] w-2/5'>{description}</p>
    </div>
  )
}
