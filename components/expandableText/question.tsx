import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { fadeIn } from '../../lib/animation/fadeIn'
import { fadeInHeight } from '../../lib/animation/fadeInHeight'

const ActionStageVariants = (fade?:boolean) => ({
  closed: {
    opacity: 1,
    rotate: fade ? '-360deg' : '-270deg'
  },
  open: {
    rotate: fade ? '90deg' : '0deg',
    opacity: fade ? 0 : 1
  }
})

export const Question = ({ title, desc, index, dark }:{title:string, desc:string, index:number, dark:boolean}) => {
  const [open, setOpen] = useState(false)
  const [animation, setAnimation] = useState(false)
  const [titleRef, titleView] = useInView()

  useEffect(() => {
    if (!animation && titleView) setAnimation(true)
  }, [titleView])

  return <div
    ref={titleRef}
    onClick={() => setOpen(!open)}
  >
  <motion.div
    className={
      'flex flex-col bg-theme-main-bg border-[1px] max-h-fit border-theme-text-main rounded-lg shadow-md mt-4 cursor-pointer' +
      (dark ? 'bg-theme-main-bg text-theme-text-main' : 'bg-theme-main-bg text-theme-dark ')
    }
    initial="hidden"
    animate={animation ? 'visible' : 'hidden'}
    variants={fadeIn({ delay: 0.4 + index / 4, direction: 'y', displayAlways: true })}
  >
    <div className={'flex mt-2 cursor-pointer ' + (animation ? 'mb-0' : 'mb-2')}>
      <div className='w-6 h-6 ml-4 mt-3.5'>
        <motion.div
          className='h-0.5 w-4 bg-theme-main-bg absolute'
          initial="closed"
          animate={open ? 'open' : 'closed'}
          variants={ActionStageVariants(true)}
        />
        <motion.div
          className='h-0.5 w-4 bg-theme-main-bg absolute'
          initial="closed"
          animate={open ? 'open' : 'closed'}
          variants={ActionStageVariants()}
        />
      </div>
      <p
        className='ml-2 font-bold text-base leading-[1.8rem] tracking-wider '
      >{title}</p>
    </div>
    <motion.div
      initial="hidden"
      animate={open ? 'visible' : 'hidden'}
      variants={fadeInHeight({ direction: 'y' })}
    >
      <p className='p-4'>
      {desc}
      </p>
    </motion.div>
  </motion.div>
  </div>
}
