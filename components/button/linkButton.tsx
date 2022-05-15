import { motion } from 'framer-motion'
import { MouseEvent, useState } from 'react'

export const LinkButton = ({ onClick, text, className }:{text:string, onClick:Function, className?:string}) => {
  const [hover, setHover] = useState(false)
  return <button
    className={'block relative ' + (className || '')}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    onClick={(e: MouseEvent<HTMLElement>) => onClick(e)}
  >
    <div
      className='flex font-bold tracking-wide overflow-hidden w-36 m-0 p-0'
    >
      {text}
      <motion.div
        initial="hidden"
        className='relative my-auto h-3 w-6'
        animate={ hover ? 'visible' : 'hidden'}
        variants={{
          visible: {
            marginLeft: '1rem'
          },
          hidden: {
            marginLeft: '0.5rem'
          }
        }}
      >
        <svg fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.1182 0.092041L16.5165 6.38152L10.1182 12.671L8.71617 11.2447L12.6462 7.38152H0.291992V5.38152H12.6462L8.71617 1.51834L10.1182 0.092041Z"
            fill="white"
          />
        </svg>
      </motion.div>
    </div>
    <motion.div
      initial="hidden"
      className='h-1 bg-theme-accent mt-2'
      animate={ hover ? 'visible' : 'hidden'}
      variants={{
        visible: {
          width: '70%',
          backgroundColor: 'rgb(var(--accent))'
        },
        hidden: {
          width: '2rem'
        }
      }}
    />
  </button>
}
