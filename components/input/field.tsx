// import { useState } from 'react'

interface fieldInterface {
  type?:string,
  name:string,
  value:string,
  onChange:Function,
  placeholder:string,
  label?:string
  error?:string|boolean,
}
export const Field = ({ type, name, value, onChange, placeholder, label, error }:fieldInterface) => {
  return <div
    className='mt-3 flex flex-col w-full max-w-[30rem]'
  >
    <label
      htmlFor={name + 'ID' + name.length}
      className={
        'pl-2 py-2 font-semibold ' +
        (error
          ? 'text-theme-red bg-white/50 rounded'

          : 'text-theme-text-main')

      }
     >{error || label || name}</label>
    <input
      className={
        'text-theme-text-main font-medium p-2 w-full max-w-[30rem] text-base rounded outline-none bg-theme-main-bg border-theme-text-main/0 border-2 ' +
        (error
          ? 'border-theme-red hover:border-theme-red focus:border-theme-red'
          : 'border-theme-grey hover:border-theme-accent-dark focus:border-theme-accent-dark')
      }
      required
      id={name + 'ID' + name.length}
      type={type}
      placeholder={placeholder }
      name={name}
      value={value}
      onChange={(e) => {
        onChange(e)
      }}
    />
  </div>
}
