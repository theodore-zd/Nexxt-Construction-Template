export const fadeInTransition = (variable?:number, duration?:number, isHidden?:boolean) => {
  if (!variable) variable = 0

  return ({
    opacity: {
      duration: 0.4 + (duration || 0),
      delay: variable
    },
    display: {
      delay: isHidden ? 0.4 + variable : 0
    },
    y: {
      duration: 0.2 + (duration || 0),
      delay: variable
    }
  })
}

export const fadeIn = (props:{delay?:number, duration?:number, display?:'flex'|'block'|'grid', direction?:'y'|'x', displayAlways?:boolean} = {}) => {
  const { delay, duration, direction, display, displayAlways } = props
  return {
    hidden: {
      display: displayAlways ? (display || 'block') : 'none',
      opacity: 0,
      [direction || 'null']: -20,
      transition: {
        opacity: {
          duration: 0.4,
          delay: 0
        },
        display: {
          delay: 0.4
        },
        y: {
          duration: 0.2,
          delay: 0
        }
      }
      // transition: fadeInTransition(delay, duration, true)
    },
    visible: {
      display: (display || 'block'),
      opacity: 1,
      [direction || 'null']: 0,
      transition: fadeInTransition(delay, duration)
    }
  }
}
