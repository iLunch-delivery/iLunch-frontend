import React from 'react'
import {
  faFacebook,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

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
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/search/results'>Cerca de ti</Link>
              </li>
              <li>
                <Link href='/jobs/list'>Red de trabajo</Link>
              </li>
            </ul>
          </div>
          <div className='ml-8'>
            <h2 className='text-xl font-semibold'>Información</h2>
            <hr className='solid mb-2' />
            <ul className='leading-6'>
              <li>
                <Link href='/user-profile'>Tu perfil</Link>
              </li>
              <li>
                <Link href='/order/active'>Pedidos en curso</Link>
              </li>
              <li>
                <Link href='/'>Contáctanos</Link>
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
