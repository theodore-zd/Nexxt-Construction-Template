import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Image } from '../../../components/image'
import { fadeIn } from '../../../lib/animation/fadeIn'
import { textTopIn } from '../../../lib/animation/textTopIn'
const HomeProjectsSection = ({ dark }:{dark?:boolean}) => {
  const [animation, setAnimation] = useState(false)

  const [titleRef, titleView] = useInView()

  useEffect(() => {
    if (!animation && titleView) setAnimation(true)
  }, [titleView])

  return <section
          className='relative py-52 bg-theme-accent-bg'
        >
        <div className='max-w-[1300px] mx-auto px-5 '>
            <div className='grid md:grid-cols-9'>
              <motion.div
                ref={titleRef}
                className='col-span-4'
                initial="hidden"
                animate={animation ? 'visible' : 'hidden'}
                variants={fadeIn({ display: 'block', displayAlways: true, direction: 'y', delay: 0.9 })}
              >
                <Image
                  className='mt-8 scale-90 sm:scale-100 md:-ml-20 lg:ml-0 mb-14 md:mb-0'
                  alt='foundation being built by Nexxt Construction'
                  src='https://images.unsplash.com/photo-1593313637552-29c2c0dacd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                  height={500}
                  width={400}
                />
              </motion.div>
              <div className='col-span-5'>
                <h4 className='uppercase text-theme-accent font-bold text-3xl md:text-5xl leading-[1.4]'>
                  <span className='relative block overflow-hidden'>
                    <motion.span
                      className='block'
                      initial="hidden"
                      animate={animation ? 'visible' : 'hidden'}
                      variants={textTopIn()}
                    >
                      Built on a Strong
                    </motion.span>
                  </span>
                  <span className='relative block overflow-hidden'>
                    <motion.span
                      className='block'
                      initial="hidden"
                      animate={animation ? 'visible' : 'hidden'}
                      variants={textTopIn(0.3)}
                    >
                      Foundation
                    </motion.span>
                  </span>
                </h4>
                <motion.p
                  className='py-10'
                  initial="hidden"
                  animate={animation ? 'visible' : 'hidden'}
                  variants={fadeIn({ display: 'block', displayAlways: true, direction: 'y', delay: 1.2 })}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </motion.p>
                <div className='grid grid-cols-2 mt-6'>

                  <motion.div
                    initial="hidden"
                    animate={animation ? 'visible' : 'hidden'}
                    variants={fadeIn({ display: 'block', displayAlways: true, direction: 'y', delay: 1.5 })}
                  >
                    <p className='text-7xl text-theme-accent'>30+</p>
                    <p className='font-semibold mt-4 text-theme-text-main/70'>Years Experience </p>
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    animate={animation ? 'visible' : 'hidden'}
                    variants={fadeIn({ display: 'block', displayAlways: true, direction: 'y', delay: 1.5 })}
                  >
                    <p className='text-7xl text-theme-accent'>3,000+</p>
                    <p className='font-semibold mt-4 text-theme-text-main/70'>Units Completed </p>
                  </motion.div>

                </div>
              </div>
            </div>
        </div>
  </section>
}
export default HomeProjectsSection
