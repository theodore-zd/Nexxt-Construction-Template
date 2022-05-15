import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { fadeIn } from '../../lib/animation/fadeIn'
import { textTopIn } from '../../lib/animation/textTopIn'

export const FancyTitle = ({ text, className }:{ text:string, className?:string }) => {
  const [animation, setAnimation] = useState(false)

  const [titleRef, titleView] = useInView()

  useEffect(() => {
    if (!animation && titleView) setAnimation(true)
  }, [titleView])

  return <div className={'relative pb-10 pt-4' + className}>
    <div ref={titleRef}>
        <motion.div
          initial="hidden"
          animate={animation ? 'visible' : 'hidden'}
          variants={fadeIn({ display: 'block', displayAlways: true, direction: 'y', delay: 0.2 })}
        >
          <svg
            viewBox="0 0 250 40"
            className='absolute h-28 sm:h-40 md:h-56 -z-10 -left-10  -top-10 sm:-top-14 md:-top-[5.3rem]'
          >
            <text
              y="20"
              x="2"
              style={{
                opacity: '0.3',
                stroke: 'grey',
                strokeWidth: '0.3px',
                fill: 'none',
                fontWeight: '700'
              }}
            >{text}</text>
          </svg>
        </motion.div>
    </div>
    <div className='relative block overflow-hidden pb-3'>
      <motion.p
        className='font-semibold text-theme-accent text-3xl sm:text-4xl lg:text-5xl z-1'
        initial="hidden"
        animate={animation ? 'visible' : 'hidden'}
        variants={textTopIn(0.4)}
      >
        {text}
      </motion.p>
    </div>
  </div>
}
