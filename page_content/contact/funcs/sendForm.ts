export const sendForm = ({ state, setSuccess, router, retry }:{state:any, setSuccess:Function, router:any, retry?:Boolean}) => {
  fetch('form_handler_url', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: {
        name: state.name,
        company: state.company,
        email: state.email,
        projectDetails: state.projectDetails
      }
    })
  })
    .then((res) => {
      if (!res.ok && !retry) {
        sendForm({ state, setSuccess, router, retry: true })
      } else {
        res.json().then((response) => {
          setSuccess(!!res.ok)
        })
      }
    })
    .catch((err:any) => {
      console.error(err)
      setSuccess(false)
    })
  router.push('contact')
}
