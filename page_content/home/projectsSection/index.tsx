import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import data from './data'
import { FancyTitle } from '../../../components/fancyTitle'
import ProjectComp from './projectComp'
const HomeFoundationSection = ({ dark }:{dark?:boolean}) => {
  const [animation, setAnimation] = useState(false)

  const [titleRef, titleView] = useInView()

  useEffect(() => {
    if (!animation && titleView) setAnimation(true)
  }, [titleView])

  return <section
          id='portfolio'
          className='relative py-52'
          ref={titleRef}
        >
        <div className='max-w-[1000px] mx-auto px-5 '>
          <FancyTitle text='Our Projects'/>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-10'>
            {
              data.map((item, index) => <ProjectComp
                key={'project-' + index + ' ' + item.title}
                index={index}
                {...item}
              />)
            }
          </div>
        </div>
  </section>
}
export default HomeFoundationSection
