import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { fadeIn } from '../../../lib/animation/fadeIn'

const HomeWhoWeAre = () => {
  const [animations, setAnimations] = useState({
    title: false
  })
  const [titleRef, titleView] = useInView()

  useEffect(() => {
    if (!animations.title && titleView) setAnimations({ ...animations, title: true })
  }, [titleView])

  return <section
        className='relative py-52 pb-60 bg-theme-accent-bg'
      >
        <div
          className='grid max-w-[90%] xs:max-w-[80%] md:grid-cols-11 md:max-w-[80%] lg:max-w-[60rem] mx-auto'
        >
          <motion.div
            ref={titleRef}
            className='col-span-4 mt-32 sm:mt-0 pb-10 md:pb-0 md:pr-20 '
            initial="hidden"
            animate={animations.title ? 'visible' : 'hidden'}
            variants={fadeIn({ display: 'block', displayAlways: true, direction: 'y', delay: 0.4 })}
          >
            <h3 className='text-theme-accent whitespace-nowrap font-semibold leading-[1.3] text-[1.5rem] xs:text-[1.8rem] sm:text-[2.25rem] md:text-[3rem]'>
              Who <br/> We Are
            </h3>
          </motion.div>
          <motion.div
            className='col-span-7'
            initial="hidden"
            animate={animations.title ? 'visible' : 'hidden'}
            variants={fadeIn({ display: 'block', displayAlways: true, direction: 'y', delay: 0.6 })}
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </motion.div>
        </div>
  </section>
}
export default HomeWhoWeAre
