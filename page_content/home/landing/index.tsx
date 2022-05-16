import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { Button } from '../../../components/button'
import { fadeIn } from '../../../lib/animation/fadeIn'
import { textTopIn } from '../../../lib/animation/textTopIn'
import { useStore } from '../../../lib/state'
import { Image } from '../../../components/image'
const HomeLandingSection = () => {
  const { Theme, screenWidth } = useStore(state => state)
  const router = useRouter()

  return <section className={
    'relative min-h-[95vh] max-h-[132vh] lg:h-[100vh] w-full bg-theme-main-bg' +
    (
      Theme === 'light'
        ? 'border-theme-text-main'
        : ''
    )
  }>
    <div
      className='grid grid-rows-2 lg:grid-cols-10 h-full bg-theme-accent'
    >
      <div
        className='col-span-3'
      />
      <div
        className='col-span-7 flex justify-end min-h-[60rem]'
        // style={{
        //   backgroundImage: 'url(/main_landing_image-Nexxt Construction.jpg)'
        // }}
       >
          <Image
            className='-mt-[34rem] lg:mt-0'
            width={screenWidth > 1000 ? 1800 : (1800 / 1.9)}
            height={screenWidth > 1000 ? 1800 : (1800 / 1.9)}
            layout="responsive"
            src='/images/landing.jpg'
            alt='landing_image_retail_street_construction_mockup'
          />
      </div>
    </div>

    {/* Content */}
    <div className="w-full flex justify-center">
      <div
        className={
          'absolute left-[0rem] md:left-[3rem] lg:left-[10rem] top-[7rem] sm:top-[10rem] text-theme-text-main max-w-full sm:w-[36rem] md:w-[40rem] mx-4 ' +
          'py-6 pt-12 px-5 sm:px-10 bg-theme-main-bg rounded shadow-2xl'
        }
      >

          <h1
            className='mt-6 md:mt-7 font-bold transition-colors duration-300 text-lg xs:text-xl sm:text-2xl md:text-4xl md:pb-6 headerFont tracking-wide '
          >
            <span className='relative block h-9 sm:h-11 md:h-14 overflow-hidden'>
              <motion.span
                className='block'
                initial="hidden"
                animate="visible"
                variants={textTopIn()}
              >
                Project and Construction
              </motion.span>
            </span>
            <span className='relative block h-9 sm:h-11 md:h-14 overflow-hidden'>
              <motion.span
                className='block'
                initial="hidden"
                animate="visible"
                variants={textTopIn(0.3)}
              >
                Management for
              </motion.span>
            </span>
            <span className='relative block h-9 sm:h-11 md:h-14 overflow-hidden'>
              <motion.span
                className='block'
                initial="hidden"
                animate="visible"
                variants={textTopIn(0.3)}
              >
                Property Developers
              </motion.span>
            </span>
          </h1>

        <motion.p
          className='block xs:text-sm text-theme-text-main font-medium transition-colors duration-300 leading-8 max-w-[38rem]'
          initial="hidden"
          animate="visible"
          variants={textTopIn(0.6)}
        >
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </span>
        </motion.p>

          <div className='grid xs:flex mt-12 mb-10 grid-rows-2 gap-4'>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn({ delay: 1.6, direction: 'y' })}
            >
              <Button
                onClick={() => router.push('#id')}
              >
                Contact Us
              </Button>
            </motion.div>

          </div>
      </div>
    </div>

    <div className='flex justify-center'>
      <div className='transform scale-y-90 absolute bottom-[10%] '>
        <div className='transform -rotate-45 border-b-2 border-l-2 border-theme-text-main h-6 w-6 ' />
      </div>
    </div>
  </section>
}
export default HomeLandingSection
