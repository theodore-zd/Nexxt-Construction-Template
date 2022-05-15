export const textTopIn = (delay?:any|number) => ({
  hidden: {
    marginTop: -100,
    marginBottom: 100,
    opacity: 0,
    transition: textTransition(delay)
  },
  visible: {
    marginTop: 0,
    marginBottom: 0,
    opacity: 1,
    transition: textTransition(delay)
  }
})

export const textTransition = (delay?:number) => ({
  delay: 0.5 + (delay || 0),
  duration: 0.5,
  ease: [0, 0.55, 0.45, 1]
})
