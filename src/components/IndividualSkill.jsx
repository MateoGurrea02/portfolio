export default function IndividualSkill({title, icon}) {
  // funcion que devuelva un numero random entre una lista de numeros
  const random = ()=>{
    const numbers = [1000,1500,2000,500,700]
    return numbers[Math.floor(Math.random() * numbers.length)]
  }
  // funcion que devuleva un string random entre una lista de strings
  const randomString = ()=>{
    const strings = ['fade-up','fade-down','fade-right','fade-left']
    return strings[Math.floor(Math.random() * strings.length)]
  }
  return (
    <span className='w-auto h-20 bg-emerald-600 flex items-center rounded-full mx-2 mb-2 text-white text-4xl p-7 aos-item'  data-aos={randomString()} data-aos-duration={random()}>
      <i className={icon}></i>
      <p className='font-family-sans text-base pl-6'>{title}</p>
    </span>
  )
}
