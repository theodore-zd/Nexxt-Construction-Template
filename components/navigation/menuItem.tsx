import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { fadeIn } from '../../lib/animation/fadeIn'
import { useStore } from '../../lib/state'

const MenuItem = ({ item, index, menuOpen, collapse, setMenuOpen }:{ item: any, index: number, menuOpen:any, setMenuOpen:Function, collapse: boolean }) => {
  const [hover, setHover] = useState(false)
  const { mouseY, mouseX } = useStore(state => state.mousePos)
  const Theme = useStore(state => state.Theme)
  const [pathname, setPathname] = useState<boolean|string>(false)

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])

  return <motion.div
      className='relative'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      key={'menuItemKey' + index}
      initial="hidden"
      animate={(menuOpen || collapse) ? 'visible' : 'hidden'}
      variants={fadeIn({ delay: (0.4 + (index / 5)), direction: 'y' })}
    >
    <motion.div
      initial="hidden"
      className={
        collapse
          ? 'h-1 bg-theme-main-bg absolute left-8 -bottom-1 overflow-hidden '
          : 'h-2 bg-theme-main-bg absolute left-0 -bottom-2 overflow-hidden '
      }
      animate={ hover && item.link !== pathname ? 'visible' : 'hidden'}
      variants={{
        visible: {
          width: collapse ? '3rem' : '20rem',
          height: collapse ? '0.25rem' : '6rem',
          backgroundColor: 'rgb(var(--accent))'
        },
        hidden: {
          width: 0
        }
      }}
      transition={{
        height: {
          delay: 0.1
        },
        backgroundColor: {
          delay: 0.2
        }
      }}
    >
      <div
        className='absolute -translate-x-[125px] -translate-y-[125px] z-[45] mix-blend-darken pointer-events-none '
        style={{
          top: mouseY,
          left: mouseX
        }}
      />
    </motion.div>

    <li className={
        'relative ' +
        (
          collapse
            ? 'ml-8 font-medium tracking-wider hover:text-theme-accent'
            : 'h-20 w-[20rem] flex justify-center mt-10 md:mt-20 text-[3rem] md:text-[4rem] text-center '
        )
      }
    >
      <div
        onClick={() => setMenuOpen(false)}
        className={'z-20 ' + (menuOpen || collapse) ? '' : 'absolute'}
      >
        <Link
          href={'' + item.link}
        >
          <a className={
            ' ' +
            (item.link === pathname
              ? (
                  Theme === 'light'
                    ? 'text-theme-accent '
                    : 'text-theme-accent '
                )
              : ' ')
          }
          >{item.label}</a>
        </Link>
      </div>

    </li>

  </motion.div>
}

export { MenuItem }
