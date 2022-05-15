import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import { Button } from '../../components/button'
import { Field } from '../../components/input/field'
import { Textarea } from '../../components/input/textarea'
import { sendForm } from './funcs/sendForm'

interface formInterface {
  state:any,
  setState:Function,
  setSuccess:Function,
  success:any,
  animations:any,
  formRef:any,
  fadeIn:Function
}

export const ContactForm = ({ state, setState, success, setSuccess, animations, formRef, fadeIn }:formInterface) => {
  const router = useRouter()

  const [errState, setErrState] = useState<any>({
    emailError: false,
    project_details: false
  })

  const validFormCheck = () => {
    const newErrState:any = {
      companyError: false,
      emailError: false
    }
    if (state.name.replace(/ /g, '').length < 3 && state.name !== '') {
      newErrState.nameError = 'Name is required'
    }
    if (state.email.replace(/ /g, '').length < 3 && state.email !== '') {
      newErrState.emailError = 'Email is required'
    } else if ((!state.email.includes('@') || !state.email.includes('.')) && state.email !== '') {
      newErrState.emailError = 'Email must be valid'
    }

    setErrState(newErrState)
    return newErrState
  }

  useEffect(() => {
    const timer = setTimeout(validFormCheck, 600)
    return () => {
      clearTimeout(timer)
    }
  }, [state])

  return <form
        ref={formRef}
        className=' pb-56 px-2 min-h-[80vh]  mx-auto w-full max-w-[30rem]'
        // action=''
        // method='post'
    >
    <motion.div
      className=''
      initial="hidden"
      animate={ animations.form && success === null ? 'visible' : 'hidden'}
      variants={fadeIn({ delay: 1.1, direction: 'y' })}
    >
      <Field
        label='Name'
        name='name'
        error={errState.nameError}
        value={state.name}
        onChange={(e:FormEvent<HTMLInputElement>) => setState({ ...state, name: e.currentTarget.value })}
        placeholder='name'
      />
    </motion.div>
    <motion.div
      className=''
      initial="hidden"
      animate={ animations.form && success === null ? 'visible' : 'hidden'}
      variants={fadeIn({ delay: 1.2, direction: 'y' })}
    >
      <Field
        label='company'
        name='Company'
        value={state.company}
        onChange={(e:FormEvent<HTMLInputElement>) => setState({ ...state, company: e.currentTarget.value })}
        placeholder='company'
      />
    </motion.div>
    <motion.div
      className=''
      initial="hidden"
      animate={ animations.form && success === null ? 'visible' : 'hidden'}
      variants={fadeIn({ delay: 1.3, direction: 'y' })}
    >
      <Field
        label='Email'
        type='email'
        name='email'
        error={errState.emailError}
        value={state.email}
        onChange={(e:FormEvent<HTMLInputElement>) => setState({ ...state, email: e.currentTarget.value.replace(/ /g, '') })}
        placeholder='email'
      />
    </motion.div>
    <motion.div
      className=''
      initial="hidden"
      animate={ animations.form && success === null ? 'visible' : 'hidden'}
      variants={fadeIn({ delay: 1.4, direction: 'y' })}
    >
      <Textarea
        label='Project Details'
        name='project_details'
        value={state.projectDetails}
        onChange={(e:FormEvent<HTMLInputElement>) => setState({ ...state, projectDetails: e.currentTarget.value })}
        placeholder={'project details'}
      />
    </motion.div>
    <motion.div
      className='mt-16'
      initial="hidden"
      animate={ animations.form && success === null ? 'visible' : 'hidden'}
      variants={fadeIn({ delay: 1.5, direction: 'y' })}
    >
      <Button
        invert={'true'}
        center
        onClick={(e:any) => {
          e.preventDefault()
          const valid = validFormCheck()
          console.log(valid)
          if (
            (state.name !== '' && state.email !== '') &&
            (!valid.emailError && !valid.nameError)
          ) {
            sendForm({ state, setSuccess, router })
          } else {
            const newErrState:any = {
              companyError: false,
              emailError: false
            }
            if (state.name.replace(/ /g, '').length < 3) {
              newErrState.nameError = 'Name is required'
            }
            if (state.email.replace(/ /g, '').length < 3) {
              newErrState.emailError = 'Email is required'
            }
            setErrState(newErrState)
          }
        }}
      >
        Submit Form
      </Button>
    </motion.div>

  </form>
}
