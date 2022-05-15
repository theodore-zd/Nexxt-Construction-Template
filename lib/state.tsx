import create from 'zustand'

interface StateInterface {
  NAVBAR_BREAKPOINT: number
  Theme: string
  setTheme: Function
  mousePos:{
    mouseX: number
    mouseY: number
  },
  setMousePos: Function
  scrollData: number
  setScroll: Function
  setScreenWidth: Function
  screenWidth: number
}

const useStore = create<StateInterface>((set:Function) => ({
  // CONSTANT STATE USED AS GLOBALS
  NAVBAR_BREAKPOINT: 1024,
  // normal state
  mousePos: {
    mouseX: 0,
    mouseY: 0
  },
  setMousePos: (value:any) => set({ mousePos: value }),
  screenWidth: 0,
  setScreenWidth: (value:any) => set({ screenWidth: value }),
  Theme: 'theme-dark',
  setTheme: (value:any) => {
    set({ Theme: value })
    localStorage.setItem('theme', value)
  },
  scrollData: 0,
  setScroll: (value:any) => set({ scrollData: value })
}))

export { useStore }
