import React,{Children} from 'react'
export default function Container({ children }) {
  return (
    <div className='bg-gray-800 w-full h-dvh'>
      <div className='container mx-auto'>{children}</div>
    </div>
  )
}
