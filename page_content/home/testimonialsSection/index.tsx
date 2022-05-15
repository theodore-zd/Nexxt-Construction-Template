import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { FancyTitle } from '../../../components/fancyTitle'
import { Image } from '../../../components/image'
import { fadeIn } from '../../../lib/animation/fadeIn'
import { useStore } from '../../../lib/state'
const HomeTestimonialsSection = ({ dark }:{dark?:boolean}) => {
  const [animation, setAnimation] = useState({
    teView1: false,
    teView2: false
  })
  const { screenWidth } = useStore(state => state)

  const [testimonial2ViewRef, testimonial2View] = useInView()
  const [testimonial1ViewRef, testimonial1View] = useInView()

  useEffect(() => {
    if (!animation.teView1 && testimonial1View) setAnimation({ ...animation, teView1: true })
    if (!animation.teView2 && testimonial2View) setAnimation({ ...animation, teView2: true })
  }, [testimonial1View, testimonial2View])

  const thisSectionRef = useRef<HTMLElement>(null)

  return <section
          className='relative py-52 '
          ref={thisSectionRef}
        >
        <div className='max-w-[1000px] mx-auto px-5 '>
          <FancyTitle text='What Clients Say'/>
          <div className='grid md:grid-cols-2 gap-6 mt-16 '>
            <div
              ref={testimonial1ViewRef}
              className='p-7 bg-theme-accent-bg rounded '
            >
              <motion.div
                className='relative'
                initial='hidden'
                animate={ animation.teView1 ? 'visible' : 'hidden'}
                variants={fadeIn({ delay: 0.9, direction: 'y' })}
              >
                <Image
                  className='rounded-full overflow-hidden'
                  width={70}
                  height={70}
                  src='/testimonial1.jpg'
                  alt='Lucas Delito testimonial portrait'
                />
                <svg
                  className='absolute right-0 top-2'
                  width="35"
                  height="30"
                  viewBox="0 0 35 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M34.6704 0.224609V5.55783C31.8634 6.02565 29.8986 7.00809 28.7758 8.50514C27.653 10.0022 27.0916 12.6688 27.0916 16.505H34.2494V29.838H20.4953V18.6102C20.4953 12.8091 21.5713 8.318 23.7233 5.13678C25.8753 1.862 29.5243 0.224609 34.6704 0.224609ZM14.4603 0.224609V5.55783C11.6533 6.02565 9.68847 7.00809 8.56569 8.50514C7.4429 10.0022 6.88151 12.6688 6.88151 16.505H14.0393V29.838H0.285156V18.6102C0.285156 12.8091 1.36116 8.318 3.51316 5.13678C5.66516 1.862 9.31421 0.224609 14.4603 0.224609Z" fill="#2C2C2C"/>
                </svg>
              </motion.div>
              <motion.div
                className='flex pt-10'
                initial='hidden'
                animate={ animation.teView1 ? 'visible' : 'hidden'}
                variants={fadeIn({ delay: 1.1, display: 'flex', direction: 'y' })}
              >
                <p className='w-52  text-lg font-bold text-theme-text-main'>John Doe</p>
                <hr className='border-t-4 my-auto  px-8 w-full border-theme-accent'/>
              </motion.div>
              <motion.p
                className='pt-10'
                initial='hidden'
                animate={ animation.teView1 ? 'visible' : 'hidden'}
                variants={fadeIn({ delay: 1.4, direction: 'y' })}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </motion.p>
            </div>
            <div
              ref={testimonial2ViewRef}
              className='p-7 bg-theme-accent-bg rounded '
            >
              <motion.div
                className='relative'
                initial='hidden'
                animate={ animation.teView1 ? 'visible' : 'hidden'}
                variants={fadeIn({ delay: 0.9 + (screenWidth > 780 ? 0.3 : 0), direction: 'y' })}
              >
                <Image
                  className='rounded-full overflow-hidden'
                  width={70}
                  height={70}
                  src='/testimonial2.jpg'
                  alt='Jurica Kolet testimonial portrait'
                />
                <svg
                  className='absolute right-0 top-2'
                  width="35"
                  height="30"
                  viewBox="0 0 35 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M34.6704 0.224609V5.55783C31.8634 6.02565 29.8986 7.00809 28.7758 8.50514C27.653 10.0022 27.0916 12.6688 27.0916 16.505H34.2494V29.838H20.4953V18.6102C20.4953 12.8091 21.5713 8.318 23.7233 5.13678C25.8753 1.862 29.5243 0.224609 34.6704 0.224609ZM14.4603 0.224609V5.55783C11.6533 6.02565 9.68847 7.00809 8.56569 8.50514C7.4429 10.0022 6.88151 12.6688 6.88151 16.505H14.0393V29.838H0.285156V18.6102C0.285156 12.8091 1.36116 8.318 3.51316 5.13678C5.66516 1.862 9.31421 0.224609 14.4603 0.224609Z" fill="#2C2C2C"/>
                </svg>

              </motion.div>
              <motion.div
                className='flex pt-10'
                initial='hidden'
                animate={ animation.teView2 ? 'visible' : 'hidden'}
                variants={fadeIn({ delay: 1.1 + (screenWidth > 780 ? 0.3 : 0), display: 'flex', direction: 'y' })}
              >
                <p className='w-52  text-lg font-bold text-theme-text-main'>Alex Kent</p>
                <hr className='border-t-4 my-auto px-8 w-full border-theme-accent'/>
              </motion.div>
              <motion.p
                className='pt-10'
                initial='hidden'
                animate={ animation.teView2 ? 'visible' : 'hidden'}
                variants={fadeIn({ delay: 1.4 + (screenWidth > 780 ? 0.3 : 0), direction: 'y' })}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </motion.p>
            </div>
          </div>
        </div>
  </section>
}
export default HomeTestimonialsSection
