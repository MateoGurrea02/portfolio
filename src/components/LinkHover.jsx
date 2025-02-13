export default function LinkHover({text,href,color,target='_self'}) {
  return (
    <a href={href} target={target} className={`relative after:${color} after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-1000`}>{text}</a>
    
  )
}
