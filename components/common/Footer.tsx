import React from 'react'
import {
  faFacebook,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <footer className='flex justify-around'>
      <section id='footer-menu'>
        <nav className='flex'>
          <ul>
            <li>Menu option</li>
            <li>Menu option</li>
            <li>Menu option</li>
          </ul>
          <ul>
            <li>Menu option</li>
            <li>Menu option</li>
            <li>Menu option</li>
          </ul>
        </nav>
      </section>
      <section>
        <h2>Siguenos</h2>
        <div id='social-icons' className='flex'>
          <FontAwesomeIcon icon={faFacebook} height={25} />
          <FontAwesomeIcon icon={faInstagram} height={25} />
          <FontAwesomeIcon icon={faTwitter} height={25} />
        </div>
      </section>
      <section>Aviso legal</section>
    </footer>
  )
}

export default Footer
