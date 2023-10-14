import React from 'react'

function Input({ texto = '', tipo }) {
  return (
    <input type={tipo} placeholder={texto} className=' bg-transparent border-0 border-b-2 border-b-white placeholder-neutral-300 focus-visible:outline-none mt-5' />
  )
}

export default function LoginForm() {
  return (
    <form className=' flex flex-col w-1/2' >
      <Input texto="Correo electrónico" tipo="email" />
      <Input texto="Contraseña" tipo="email" />
      <button type='submit' className=' mt-10 p-2 text-white rounded-full border-2 border-white w-1/2 self-center'>Iniciar sesión</button>
      <button className=' mt-5 p-2 text-white rounded-full border-2 bg-blue-600 border-blue-600 w-1/2 self-center shadow-md'>Ingresa con google</button>
    </form>
  )
}
