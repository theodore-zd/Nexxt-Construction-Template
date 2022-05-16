import { MouseEvent } from 'react'

export const Button = (props:{children:any, center?:any, onClick:Function, outline?:any, grey?:boolean, invert?:boolean|string, className?:any}) => {
  const { outline, onClick, center, className, grey, invert } = props
  const sageProps = { ...props }
  delete sageProps.center
  delete sageProps.outline
  delete sageProps.className

  return <button
    {...sageProps}
    onClick={(e: MouseEvent<HTMLElement>) => onClick(e)}
    className={
      (outline
        ? ('border-4 border-theme-text-main ' +
           'hover:tracking-wider hover:border-theme-grey hover:text-theme-grey ')
        : grey
          ? ('bg-theme-grey text-white hover:tracking-wider hover:brightness-75 ')
          : invert
            ? ('bg-theme-main-bg text-theme-accent hover:tracking-wider hover:brightness-95 ')
            : ('bg-theme-accent-dark text-white hover:tracking-wider hover:brightness-[0.99] ')
      ) +
      'block text-lg md:text-xl leading-[4px] md:leading-[8px] py-4 h-[3rem] md:h-[3.5rem] w-40 md:w-52 font-bold shadow-lg transition-all text-center rounded ' +
      (center ? 'mx-auto' : 'mr-4 sm:mr-8') +
      ' ' + className
    }
   />
}
