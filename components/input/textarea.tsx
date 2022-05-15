export const Textarea = ({ name, value, onChange, placeholder, label }:{name:string, value:string, onChange:Function, placeholder:string, label?:string}) => {
  return <div
    className='mt-3 flex flex-col w-full max-w-[30rem] '
  >
    <label
      htmlFor={name + 'ID' + name.length}
      className='ml-2 py-2 font-semibold text-theme-text-main'
     >{label || name}</label>
    <textarea
      className={
        ' font-medium p-2 w-full max-w-[30rem] h-40 text-base rounded outline-none bg-theme-main-bg border-theme-text-main/0 border-2 ' +
        'border-theme-grey hover:border-theme-accent-dark focus:border-theme-accent-dark'
      }
      id={name + 'ID' + name.length}
      placeholder={placeholder }
      name={name}
      value={value}
      onChange={(e) => onChange(e)}
    />
  </div>
}
