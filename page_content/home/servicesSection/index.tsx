import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
// import { LinkButton } from '../../../components/button/linkButton'
import { FancyTitle } from '../../../components/fancyTitle'
import { fadeIn } from '../../../lib/animation/fadeIn'
import { useStore } from '../../../lib/state'

const HomeServicesSection = () => {
  const { screenWidth } = useStore(state => state)
  const [animations, setAnimations] = useState({
    title: false,
    service1: false,
    service2: false
  })
  const [titleRef, titleView] = useInView()
  const [service1Ref, service1View] = useInView()
  const [service2Ref, service2View] = useInView()

  useEffect(() => {
    if (!animations.title && titleRef) setAnimations({ ...animations, title: true })
    if (!animations.service1 && service1View) setAnimations({ ...animations, service1: true })
    if (!animations.service2 && service2View) setAnimations({ ...animations, service2: true })
  }, [titleView, service1View, service2View])

  return <section
        className='relative py-52 pb-60'
      >
        <div
          className='grid max-w-[90%] xs:max-w-[80%]md:max-w-[80%] lg:max-w-[70rem] mx-auto px-6 '
        >
          <FancyTitle text='Our Services' />
          <div className='grid mt-32 md:grid-cols-2 gap-28 md:gap-12'>

            <div ref={service1Ref}>
              <motion.p
                className='uppercase text-theme-accent font-bold text-4xl leading-[1.4]'
                initial="hidden"
                animate={animations.service1 ? 'visible' : 'hidden'}
                variants={fadeIn({ display: 'block', displayAlways: true, direction: 'y', delay: 0.9 })}
              >
                Project <br/>Management
              </motion.p>
              <motion.p
                className='my-10'
                initial="hidden"
                animate={animations.service1 ? 'visible' : 'hidden'}
                variants={fadeIn({ display: 'block', displayAlways: true, direction: 'y', delay: 1.2 })}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </motion.p>
              {/* <motion.div
                className='mt-auto'
                initial="hidden"
                animate={animations.service1 ? 'visible' : 'hidden'}
                variants={fadeIn({ display: 'block', displayAlways: true, direction: 'y', delay: 1.6 })}
              >
                <LinkButton
                  className='mt-auto'
                  text='Learn More'
                  onClick={() => {}}
                />
              </motion.div> */}
            </div>

            <div ref={service2Ref}>
              <motion.p
                className='uppercase text-theme-accent font-bold text-4xl leading-[1.4]'
                initial="hidden"
                animate={animations.service2 ? 'visible' : 'hidden'}
                variants={fadeIn({ display: 'block', displayAlways: true, direction: 'y', delay: 0.9 + (screenWidth > 780 ? 0.3 : 0) })}
              >
                Construction <br/>Management
              </motion.p>
              <motion.p
                className='my-10'
                initial="hidden"
                animate={animations.service2 ? 'visible' : 'hidden'}
                variants={fadeIn({ display: 'block', displayAlways: true, direction: 'y', delay: 1.2 + (screenWidth > 780 ? 0.3 : 0) })}
              >

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </motion.p>
              {/* <motion.div
                className='mt-auto'
                initial="hidden"
                animate={animations.service2 ? 'visible' : 'hidden'}
                variants={fadeIn({ display: 'block', displayAlways: true, direction: 'y', delay: 1.6 + (screenWidth > 780 ? 0.3 : 0) })}
              >
                <LinkButton
                  className='mt-auto'
                  text='Learn More'
                  onClick={() => {}}
                />
              </motion.div> */}
            </div>

          </div>
        </div>
  </section>
}
export default HomeServicesSection
