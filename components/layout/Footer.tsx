import React from 'react'
import {
  faFacebook,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <footer className='flex flex-col gap-4 justify-around bg-gray-500 text-white py-8 sm:flex-row sm:gap-2'>
      <section
        id='footer-menu'
        className='flex justify-center items-center basis-5/12'
      >
        <nav className='flex flex-1 justify-around'>
          <div>
            <h2 className='text-xl font-semibold'>Explora</h2>
            <hr className='solid mb-2' />
            <ul className='leading-6'>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>Cerca de ti</a>
              </li>
              <li>
                <a href='#'>Red de trabajo</a>
              </li>
            </ul>
          </div>
          <div className='ml-8'>
            <h2 className='text-xl font-semibold'>Información</h2>
            <hr className='solid mb-2' />
            <ul className='leading-6'>
              <li>
                <a href='#'>Tu perfil</a>
              </li>
              <li>
                <a href='#'>Pedidos en curso</a>
              </li>
              <li>
                <a href='#'>Contáctanos</a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <section className='flex flex-col items-center justify-center basis-3/12'>
        <h2 className='text-xl font-semibold'>Siguenos</h2>
        <div id='social-icons' className='flex mt-4 text-2xl'>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon className='mx-2' icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </section>
      <section className='flex justify-center items-center basis-4/12'>
        <div className='h-fit'>
          <img
            className='h-16 mx-auto'
            src='/assets/iLunch-logo.png'
            alt='iLunch logo'
          />
          <p className='text-sm text-center'>
            © [2023] iLunch. Todos los derechos reservados.
          </p>
        </div>
      </section>
    </footer>
  )
}

export default Footer
