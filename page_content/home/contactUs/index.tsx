import { useState } from 'react'
import { fadeIn } from '../../../lib/animation/fadeIn'
import { ContactForm } from '../../contact/form'

const HomeContactUs = () => {
  const [success, setSuccess] = useState<any>(null)
  const [state, setState] = useState({
    name: '',
    company: '',
    email: '',
    projectDetails: ''
  })

  const animations = {
    form: true
  }

  const formRef = null

  return (
  <section className='relative py-52 pb-0 bg-theme-accent'>
    <div className='grid md:grid-cols-2 max-w-[1300px] mx-auto px-5'>
      <div id='id' className='pb-10 md:pb-0 w-[30rem] mx-auto'>
        <p className='font-semibold pt-20 text-white uppercase text-3xl sm:text-4xl lg:text-5xl z-1'>Let&#39;s Talk</p>
        <div className='pt-14'>
          <p className='font-semibold text-2xl text-white'>General Inquiries</p>
          <p className='pt-2 text-theme-text-main underline hover:text-theme-text-main'><a href="mailto:info@nexxtconstruction.com">info@nexxtconstruction.com</a></p>
        </div>
        <div className='pt-14'>
          <p className='font-semibold text-white text-sm pb-2'>President</p>
          <p className='font-semibold text-3xl text-white'>Jane Doe</p>
          <p className='pt-2 w-fit text-theme-text-main underline hover:text-theme-text-main'><a href="mailto:phillip.marsland@nexxtconstruction.com">jane.doe@nexxtconstruction.com</a></p>
          <p className='pt-2 w-fit text-theme-text-main underline hover:text-theme-text-main'><a href='tel:1233456789'>123-345-6789</a></p>
        </div>
      </div>
      <div>
        <ContactForm {...{ state, setState, success, animations, formRef, fadeIn, setSuccess }} />
      </div>
    </div>
  </section>)
}
export default HomeContactUs
