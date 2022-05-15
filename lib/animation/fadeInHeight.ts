export const fadeInTransition = ({ delay, duration, isHidden }:{delay?:number, duration?:number, isHidden?:boolean}) => {
  return ({
    opacity: {
      duration: duration || 0.4,
      delay: 0 + (delay || 0)
    },
    display: {
      delay: isHidden ? 0.4 + (delay || 0) : 0
    },
    height: {
      duration: 0.2,
      delay: 0 + (delay || 0)
    },
    y: {
      duration: 0.2,
      delay: 0 + (delay || 0)
    }
  })
}

export const fadeInHeight = (props:{delay?:number, duration?:number, direction?:string, flex?:boolean, displayNone?:boolean}) => {
  const { delay, direction, displayNone, flex, duration } = props
  return {
    hidden: {
      overflow: 'hidden',
      display: displayNone ? 'none' : 'inherit',
      opacity: 0,
      height: 0,
      [direction || 'null']: -20,
      transition: fadeInTransition({ delay, isHidden: true })

    },
    visible: {
      overflow: 'hidden',
      display: displayNone ? flex ? 'flex' : 'block' : 'inherit',
      opacity: 1,
      height: 'auto',
      [direction || 'null']: 0,
      transition: fadeInTransition({ delay, duration })
    }
  }
}
