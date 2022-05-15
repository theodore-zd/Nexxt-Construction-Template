import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { fadeIn } from '../../../lib/animation/fadeIn'
import { textTopIn } from '../../../lib/animation/textTopIn'
// import { useStore } from '../../../lib/state'
import { Image } from '../../../components/image'

const HomeFeaturesSection = () => {
  const [animations, setAnimations] = useState({
    title: false,
    featuresRow1: false,
    featuresRow2: false,
    featuresRow3: false
  })
  const [titleRef, titleView] = useInView()
  const [features1Ref, features1RefView] = useInView()
  const [features2Ref, features2RefView] = useInView()
  const [features3Ref, features3RefView] = useInView()

  // const { mouseY, mouseX } = useStore(state => state.mousePos)
  // const { Theme, scrollData } = useStore(state => state)

  useEffect(() => {
    if (!animations.title && titleView) setAnimations({ ...animations, title: true })
    if (!animations.featuresRow1 && features1RefView) setAnimations({ ...animations, featuresRow1: true })
    if (!animations.featuresRow2 && features2RefView) setAnimations({ ...animations, featuresRow2: true })
    if (!animations.featuresRow3 && features3RefView) setAnimations({ ...animations, featuresRow3: true })
  }, [titleView, features1RefView, features2RefView, features3RefView])

  return <section
    className='relative pb-[44rem] grid pt-44 content-center justify-center z-10 bg-theme-accent'
  >
    <div
      className='w-[32rem] text-center'
    >
      <p className='font-bold uppercase text-xs md:text-ms text-theme-text-alt'>
        <span className='relative block h-fit overflow-hidden'>
            <span className='relative block h-9  overflow-hidden'>
              <motion.span
                className='block'
                initial="hidden"
                animate={animations.title ? 'visible' : 'hidden'}
                variants={textTopIn(0.6)}
              >
                With 30 years of experience
              </motion.span>
            </span>
          </span>
        </p>
        <h2
          ref={titleRef}
          className='font-bold pt-0 text-2xl xs:text-3xl sm:text-4xl md:text-5xl h-14 capitalize text-theme-text-alt'
        >
          <span className='relative block h-fit pb-2 overflow-hidden'>
            <motion.span
              className='block'
              initial="hidden"
              animate={animations.title ? 'visible' : 'hidden'}
              variants={textTopIn(0.2)}
            >
              we know how to get
            </motion.span>
          </span>
          <span className='relative block h-fit pb-1 overflow-hidden'>
            <motion.span
              className='block'
              initial="hidden"
              animate={animations.title ? 'visible' : 'hidden'}
              variants={textTopIn(0.4)}
            >
              the job done
            </motion.span>
          </span>
        </h2>
    </div>
    <div
      className='absolute bg-theme-accent-bg w-full h-[48rem] lg:h-[24rem] bottom-0 left-0'
    >
      <div className='absolute -top-40 w-full h-0 '>
        <motion.div
          className='px-10 py-20 pb-10 rounded bg-theme-main-bg mx-auto mt-10 shadow-lg grid max-w-[96%] md:max-w-[80%] xl:max-w-[70%] gap-20 lg:gap-12 lg:grid-cols-3'
          initial="hidden"
          animate={animations.featuresRow1 ? 'visible' : 'hidden'}
          variants={fadeIn({ display: 'grid', displayAlways: true, direction: 'y', delay: 0.4 })}
        >
          <div ref={features1Ref}>
            <motion.div
              initial="hidden"
              animate={animations.featuresRow1 ? 'visible' : 'hidden'}
              variants={fadeIn({ direction: 'y', delay: 1.1 })}
            >
              <Image
                height={50}
                width={50}
                src='/construction-phase.svg'
                alt='orange wrench icon'
              />
            </motion.div>
            <motion.div
              initial="hidden"
              animate={animations.featuresRow1 ? 'visible' : 'hidden'}
              variants={fadeIn({ direction: 'y', delay: 1.3 })}
            >
              <h4 className='pt-6 md:pt-10 pb-4 font-semibold text-theme-text-main'>Pre-construction Phase</h4>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={animations.featuresRow1 ? 'visible' : 'hidden'}
              variants={fadeIn({ direction: 'y', delay: 1.5 })}
            >
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </motion.div>
          </div>
          <div ref={features2Ref}>
            <motion.div
              initial="hidden"
              animate={animations.featuresRow3 ? 'visible' : 'hidden'}
              variants={fadeIn({ direction: 'y', delay: 1.7 })}
            >
              <Image
                height={50}
                width={50}
                src='/pre-construction-phase.svg'
                alt='orange wrench icon'
              />
            </motion.div>
            <motion.div
              initial="hidden"
              animate={animations.featuresRow1 ? 'visible' : 'hidden'}
              variants={fadeIn({ direction: 'y', delay: 1.9 })}
            >
              <h4 className='pt-6 md:pt-10 pb-4 font-semibold text-theme-text-main'>Construction Phase</h4>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={animations.featuresRow1 ? 'visible' : 'hidden'}
              variants={fadeIn({ direction: 'y', delay: 2.2 })}
            >
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </motion.div>
          </div>
          <div ref={features3Ref}>
            <motion.div
              initial="hidden"
              animate={animations.featuresRow3 ? 'visible' : 'hidden'}
              variants={fadeIn({ direction: 'y', delay: 2.5 })}
            >
              <Image
                height={50}
                width={50}
                src='/post-construction-phase.svg'
                alt='orange wrench icon'
              />
            </motion.div>
            <motion.div
              initial="hidden"
              animate={animations.featuresRow1 ? 'visible' : 'hidden'}
              variants={fadeIn({ direction: 'y', delay: 2.7 })}
            >
              <h4 className='pt-6 md:pt-10 pb-4 font-semibold text-theme-text-main'>Post-Construction Phase</h4>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={animations.featuresRow1 ? 'visible' : 'hidden'}
              variants={fadeIn({ direction: 'y', delay: 2.9 })}
            >
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
}
export default HomeFeaturesSection
