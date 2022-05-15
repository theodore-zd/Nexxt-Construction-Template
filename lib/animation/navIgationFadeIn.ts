export const fadeInTransition = {
  opacity: {
    duration: 0.4,
    delay: 0
  },
  y: {
    duration: 0.6,
    delay: 0
  },
  display: {
    duration: 1
  }
}

export const navIgationFadeIn = () => {
  return {
    hidden: {
      display: 'none',
      opacity: 0,
      y: 0,
      transition: fadeInTransition
    },
    visible: {
      display: 'block',
      opacity: 1,
      y: 0,
      transition: fadeInTransition
    }
  }
}

export const navCollapse = () => {
  return {
    hidden: {
      display: 'block',
      opacity: 1,
      y: 0,
      transition: {}
    },
    visible: {
      display: 'block',
      opacity: 1,
      y: 0,
      transition: {}
    }
  }
}
