import '../styles/styles.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useStore } from '../lib/state'

function MyApp ({ Component, pageProps }: AppProps) {
  const { setMousePos, setScreenWidth, setScroll, Theme, setTheme } = useStore(state => state)

  useEffect(() => {
  }, [])

  useEffect(() => {
    if (localStorage.getItem('theme') && localStorage.getItem('theme') !== Theme) {
      setTheme(localStorage.getItem('theme'))
    }
    // mouse
    const mouseMoveHandler = (e:any) => {
      setMousePos({
        mouseX: e.pageX,
        mouseY: e.pageY
      })
    }
    window.addEventListener('mousemove', mouseMoveHandler)

    // scroll
    const scrollHandler = (e:any) => {
      const scrolled =
        document.body.scrollTop || document.documentElement.scrollTop

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      // eslint-disable-next-line no-unused-vars
      const scrollPercent = scrolled / height
      setScroll(scrolled)
    }
    window.addEventListener('scroll', scrollHandler)

    // width
    setScreenWidth(window.innerWidth)
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth))

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
      window.removeEventListener('resize', () => setScreenWidth(window.innerWidth))
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return <div
    className={'' + Theme}
  >
    <Component
      {...pageProps}
    />
  </div>
}

export default MyApp
