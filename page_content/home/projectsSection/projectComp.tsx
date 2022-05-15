import { Image } from '../../../components/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { fadeIn } from '../../../lib/animation/fadeIn'
const ProjectComp = ({ title, desc, image, index }:{ title:string, desc:string, image:string, index:number }) => {
  const [hover, setHover] = useState(false)
  const [animation, setAnimation] = useState(false)
  const [titleRef, titleView] = useInView()

  useEffect(() => {
    if (!animation && titleView) setAnimation(true)
  }, [titleView])

  return <motion.div
          ref={titleRef}
          initial='hidden'
          animate={ animation ? 'visible' : 'hidden'}
          variants={fadeIn({ delay: 1.2 + (index / 5 || 0), displayAlways: true, direction: 'y' })}

          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
        <div
          className='relative mx-auto max-w-[320px] max-h-[320px] overflow-hidden shadow-md'
        >
          <Image
            className='transition-transform '
            style={{
              transform: (hover ? 'Scale(1.05)' : 'Scale(1)'),
              transitionDuration: '400ms'
            }}
            src={image}
            alt={title + ' building photo'}
            height={320}
            width={320}
          />
          <div
            className='absolute bg-theme-main-bg border-2 border-theme-accent top-0 left-0 p-5 w-full h-full z-5 transition-opacity backdrop-blur'
            style={{
              opacity: (hover ? 1 : 0),
              transitionDuration: '300ms'
            }}
          />
          <div
            className='absolute bg-gradient-to-t from-theme-text-main to-transparent bottom-0 left-0 p-5 w-full h-32'
            style={{
              opacity: (hover ? 0 : 1)
            }}
          />
          <div
            className='absolute top-0 left-0 p-5 w-full h-full z-10'
          >
            <p
              className='mt-auto absolute md:text-lg font-semibold text-theme-text-alt'
              style={{
                ...hover
                  ? {
                      top: '1.6rem',
                      color: 'rgb(var(--accent))'
                    }
                  : {
                      bottom: '0.8rem'
                    }
              }}
            >
              {title}
            </p>
            <p
              className='mt-12 font-medium text-theme-text-main transition-opacity delay-300'
              style={{
                opacity: (hover ? 1 : 0),
                display: (hover ? 'block' : 'none')
              }}
            >
              {desc}
            </p>
          </div>
        </div>
  </motion.div>
}
export default ProjectComp
