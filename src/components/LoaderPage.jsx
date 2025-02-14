import { BlinkBlur } from 'react-loading-indicators'

export default function LoaderPage() {
  return (
    <div className="z-20 fixed bg-gray-700 w-full h-dvh flex justify-center items-center animate-flip-down animate-once animate-duration-[1000ms] animate-ease-in animate-delay-[2500ms] animate-reverse animate-fill-forwards">
      <span className=''><BlinkBlur color={["#b6a45e"]} speedPlus="-3" size="large" text="" textColor=""/></span>
    </div>

  )
}
