import { Children } from 'react'

export default function Project({imageList,title,description,children}) {
  return (
    <div className='lg:mt-40 mb-20'>
      <div className='overflow-scroll bg-gray-800 no-scrollbar touch-pan w-full' >
        <div className='flex lg:ml-[10%]'>
          {imageList.map((image) => (
            <img src={image} alt='devtree' className='lg:w-2/5 my-5 lg:m-5' key={image}/>
          ))}
        </div>
      </div>
      <h2 className='lg:text-5xl text-3xl text-white font-black ml-[12%]'>{title}</h2>
      <div className='lg:text-3xl text-2xl text-emerald-600 font-bold ml-[12%] flex'>
        {children}
      </div>
      <p className='lg:text-lg text-base text-white ml-[12%] w-4/5 lg:w-2/5'>{description}</p>
    </div>
  )
}
